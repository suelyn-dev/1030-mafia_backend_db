import { pool } from "../utilities/db.js"

export async function getAllGebiete() {
    const conn = await pool.getConnection()
    try {
        const [rows] = await conn.query("SELECT * FROM gebiete")
        return rows

    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}