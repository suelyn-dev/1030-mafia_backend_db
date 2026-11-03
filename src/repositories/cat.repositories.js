//Datenbankkommunikation - Datenzugriffsschicht
import { pool } from "../utilities/db.js"

export async function getAllCats() {
    const conn = await pool.getConnection()
    try {
        const [rows, haus] = await conn.query("SELECT *, rang.name AS rangName, katzen.name as katzenName FROM katzen JOIN rang ON katzen.cat_rank = rang.rang_id;")
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
    const [result] = await pool.execute("INSERT INTO katzen(name, cat_rank, avatar_url, skill) VALUES(:name, :cat_rank, :avatar, :skill)", cat) //--> :name sind benannte Platzhalter, freischalten in db.js
    return result
}