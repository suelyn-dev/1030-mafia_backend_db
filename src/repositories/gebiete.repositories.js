import { pool } from "../utilities/db.js"

export async function getAllGebiete() {
    const conn = await pool.getConnection()
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