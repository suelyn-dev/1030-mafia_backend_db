//Datenbankkommunikation - Datenzugriffsschicht
import { pool } from "../utilities/db.js"

export async function getAllCats() {
    const conn = await pool.getConnection()
    try {
        const res = await conn.query("SELECT * FROM katzen")
        console.log(res)
        const [rows] = res
        return rows

    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}