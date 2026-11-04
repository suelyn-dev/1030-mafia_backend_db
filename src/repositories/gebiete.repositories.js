import { pool } from "../utilities/db.js"

export async function getAllGebiete() {
    const conn = await pool.getConnection() //Pool händisch connection nehmen und schließen
    try {
        const [rows] = await conn.query(
            "SELECT *, gebiete.name as gebieteName FROM gebiete LEFT JOIN clan on gebiete.clan_id = clan.clan_id;")
        return rows

    } catch(err) {
        throw err
        
    } finally {
        conn.release()
    }
}

export async function changeClanId(ids) {
    try {
        const sql = `UPDATE gebiete SET clan_id = ? WHERE ID = ?`
        const [row] = await pool.execute(sql,[ids.clanid, ids.regionid]) //pool.execute macht das automatisch
        return row
    } catch(err) {
        console.log(err);
        throw err
    }
}