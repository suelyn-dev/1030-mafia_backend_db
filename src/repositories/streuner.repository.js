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