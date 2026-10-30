//Datenbankkommunikation - Datenzugriffsschicht
import { connection } from "../utilities/db.js"

export async function getAllCats(){

    const db = await connection()
    const [rows] = await db.query("SELECT * FROM katzen")
    //returend ein Array mit Katzen
    return rows
}