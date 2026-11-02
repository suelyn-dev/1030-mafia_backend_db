//Datenbankkommunikation - Datenzugriffsschicht
import { pool } from "../utilities/db.js"

export async function getAllCats() {
    const conn = await pool.getConnection()
    try {
        const [rows, haus] = await conn.query("SELECT * FROM katzen limit 2")
        console.log(haus);
        return rows

    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}