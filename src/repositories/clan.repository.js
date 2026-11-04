import { pool } from "../utilities/db.js";

export async function createNewClan(clan, cat) {
    const conn = await pool.getConnection()

    try {
        await conn.beginTransaction()

        //Katze anlegen
        const [catRes] = await conn.execute("INSERT INTO katzen(name, cat_rank, avatar_url, skill) VALUES(:name, :rank, :avatar, :skill)", cat)

        //const cat_id = catRes.insertID
        //clan.don_id = cat_id --> ich bekomme meine Katzen ID, kurz:
        clan.don_id = catRes.insertId

        //Clan anlegen
        const [clanRes] = await conn.execute("INSERT INTO clan(name,don, fische) VALUES(:name, :don_id, :fische)", clan)
        const clanID = clanRes.insertId

        //Katze updaten mit clan_id
        await conn.execute("UPDATE katzen SET clan_id = ? WHERE katzen_id = ?", [clanID, clan.don_id]) //lezteres also die Katzen-ID

        await conn.commit()
        return { catId: clan.don_id, clanID }
    } catch (err) {
        await conn.rollback()
        throw err
    } finally {
        conn.release()
    }
}

export async function getAllClans() {
    const conn = await pool.getConnection()
    try {
        const [rows] = await conn.query(`
            SELECT c.clan_id, 
            c.name AS clanName, 
            c.fische AS fische, 
            k_don.name AS donName, 
            COUNT(DISTINCT g.gebiete_id) AS anzahlGebiete, 
            COUNT(DISTINCT k_all.katzen_id) AS clanMitglieder 
            FROM clan c 
            LEFT JOIN katzen k_don ON c.don = k_don.katzen_id 
            LEFT JOIN gebiete g ON c.clan_id = g.clan_id 
            LEFT JOIN katzen k_all ON c.clan_id = k_all.clan_id 
            GROUP BY c.clan_id, c.name, c.fische, k_don.name;
        `);

        /* "SELECT *, rang.name AS rangName, katzen.name as katzenName FROM katzen JOIN rang ON katzen.cat_rank = rang.rang_id;" */
        return rows

    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}