//Datenbankkommunikation - Datenzugriffsschicht
import { pool } from "../utilities/db.js"

export async function getAllCats() {
    const conn = await pool.getConnection()
    try {
        const [rows, haus] = await conn.query("SELECT * FROM katzen")
        console.log(haus);
        return rows

    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}

//oben holen wir uns eine connection, mit dem feature pool.execute holt sich dere Pool eine Connection und schließt sie automatisch wieder
export async function insertNewCat(cat) {
    const [result] = await pool.execute("INSERT INTO katzen(name, cat_rank, avatar_url) VALUES(:name, :cat_rank, :avatar)", cat) //--> :name sind benannte Platzhalter, freischalten in db.js
    return result
}