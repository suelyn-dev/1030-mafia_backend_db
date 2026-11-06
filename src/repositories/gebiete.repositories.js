import { pool } from "../utilities/db.js"

export async function getAllGebiete() {
    const conn = await pool.getConnection() //Pool händisch connection nehmen und schließen
    try {
        const [rows] = await conn.query(
            "SELECT *, gebiete.name as gebieteName FROM gebiete LEFT JOIN clan on gebiete.clan_id = clan.clan_id;")
        return rows

    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}

export async function changeClanId(ids) {
    try {
        const sql = `UPDATE gebiete SET clan_id = ? WHERE gebiete_id = ?`
        const [row] = await pool.execute(sql, [ids.clanId, ids.regionId]) //pool.execute macht das automatisch
        return row
    } catch (err) {
        console.log(err);
        throw err
    }
}

//Kampf starten
export async function createNewFight(ids) {
    const conn = await pool.getConnection()

    try {
        await conn.beginTransaction()
        const [kampfRes] = await conn.execute(`INSERT INTO gebietskampf(gebiete_id) VALUES(?)`, [ids.regionId])
        const kampfId = kampfRes.insertId

        const [clansRes] = await conn.execute(`
        INSERT INTO kaempfe(gebietskampf_id, clan_id) 
        VALUES(?, ?), (?, ?)`,
            [kampfId, ids.homeClanId, kampfId, ids.battleClanId]
        )

        await conn.commit();

        return { kampfId, clansRes }

    } catch (error) {
        await conn.rollback();
        console.error("Fehler bei Kampfzuweisung, irgendwas stimmt nicht, Rollback ausgeführt:", error);
        throw error;

    } finally {
        conn.release();
    }
}

//Sieger ermitteln
export async function getExpiredFights() {
    const [rows] = await pool.execute(`
        SELECT gebietskampf_id FROM gebietskampf
        WHERE status_aktiv = 1
        AND kampf_datum <= NOW() - INTERVAL 1 MINUTE`);
    return rows;
}

export async function getFightClans(gebietskampf_id) { 
    const [rows] = await pool.execute(`
        SELECT clan_id FROM kaempfe
        WHERE gebietskampf_id = ?`, [gebietskampf_id]);
    return rows.map(row => row.clan_id); //--> [{clan_id: 1}, {clan_id: 2}] wird ein einfaches Array: [1, 2]
}

export async function endFight(gebietskampf_id, sieger_id) {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        //Region ermitteln
        const [kampfRow] = await conn.execute(`
            SELECT gk.gebiete_id, g.fischration 
            FROM gebietskampf gk
            JOIN gebiete g ON gk.gebiete_id = g.gebiete_id
            WHERE gk.gebietskampf_id = ?`,
            [gebietskampf_id]
        );

        const regionId = kampfRow[0]?.gebiete_id;
        const fischration = kampfRow[0]?.fischration || 0;

        //Kampf beenden und Gewinner eintragen
        await conn.execute(`
            UPDATE gebietskampf SET status_aktiv = 0, sieger_id = ?
            WHERE gebietskampf_id = ?`, [sieger_id, gebietskampf_id]);

        // clan_id in gebeite überschreiben
        if (sieger_id && regionId) {
            await conn.execute(`
                UPDATE gebiete SET clan_id = ? 
                WHERE gebiete_id = ?`, [sieger_id, regionId]);

            await conn.execute(`
            UPDATE clan SET fische = fische + ? 
            WHERE clan_id = ?`, [fischration, sieger_id]);
        }

        // Kampf löschen
        await conn.execute(`
            DELETE FROM kaempfe WHERE gebietskampf_id = ?`, [gebietskampf_id]);

        await conn.commit();

    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}
