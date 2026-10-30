//Datenbankkommunikation - Datenzugriffsschicht
import { connection } from "../utilities/db.js"

export async function getAllCats() {

    const db = await connection()
    try {
        const [rows] = await db.query("SELECT * FROM katzen")
        return rows
    } catch (error) {
        throw error
    } finally {
        db.end() //damit die Verbindung nach jedem Aufruf beendet wird
    }
}