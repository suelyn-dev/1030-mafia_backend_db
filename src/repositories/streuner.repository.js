import { pool } from "../utilities/db.js"

export async function getAllStreuner() {
    try {
        const sql = `SELECT * FROM katzen where clan_id IS NULL;`
        const [rows] = await pool.execute(sql)
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}

//Katzen-ID vom Button
export async function getStreunerById(id) {
    try {
        const sql = `SELECT * FROM katzen WHERE katzen_id = ?;`;
        const [rows] = await pool.execute(sql, [id]);
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}

//Streuner anheuern mit Gehaltsprüfung - Transaktion

export async function assignStreunerIdCash(catId, clanId) {
    const conn = await pool.getConnection();

    try{
        await conn.beginTransaction()

        //Streuner Clan-id zuordnen
        const [res1] = await conn.execute(`
            UPDATE katzen
            SET clan_id = ? WHERE katzen_id = ?`, [clanId, catId])
        
        //Checken ob Gehalt ausreicht
        const [res2] = await conn.execute(`
            UPDATE clan
            SET fische = fische - (SELECT gehalt FROM katzen WHERE katzen_id = ?) WHERE clan_id = ?
            AND fische >= (SELECT gehalt FROM katzen WHERE katzen_id = ?);`, [catId, clanId, catId])
            //Alternativ im Terminal: ALTER TABLE clan MODIFY fische INT UNSIGNED DEFAULT 0;
        
        if (res2.affectedRows === 0) {
            throw new Error("Nicht genug Fische im Clan vorhanden!");
        }
        
        await conn.commit();

        return {res1, res2}
    }catch (error) {
        await conn.rollback();
        console.error("Fehler bei Clan-Zuweisung, Fische reichen nicht aus, Rollback ausgeführt:", error);
        throw error;

    } finally {
                conn.release();
    }
}