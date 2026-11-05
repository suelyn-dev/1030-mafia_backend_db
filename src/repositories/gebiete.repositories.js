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