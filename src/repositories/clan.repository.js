import { pool } from "../utilities/db.js";

export async function createNewClan(clan, cat) {
    const conn = await pool.getConnection()

    try {
        await conn.beginTransaction()

        //Katze anlegen
        const [catRes] = await conn.execute("INSERT INTO katzen(name, cat_rank, avatar_url) VALUES(:name, :rank, :avatar)", cat)

        //const cat_id = catRes.insertID
        //clan.don_id = cat_id --> ich bekomme meine Katzen ID, kurz:
        clan.don_id = catRes.insertId

        //Clan anlegen
        const [clanRes] = await conn.execute("INSERT INTO clan(name,don) VALUES(:name, :don_id)", clan)
        const clanID = clanRes.insertId

        //Katze updaten mit clan_id
        await conn.execute("UPDATE katzen SET clan_id = ? WHERE katzen_id = ?", [clanID, clan.don_id]) //lezteres also die Katzen-ID

        await conn.commit()
        return {catId: clan.don_id, clanID}
} catch(err){
    await conn.rollback()
    throw err
} finally {
    conn.release()
}
}