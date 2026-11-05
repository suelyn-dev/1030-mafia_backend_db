import { allStreuner, allStreunerId, assignmentService } from "../service/streuner.service.js";

export async function getStreuner(req, res) {
    const streuner = await allStreuner()
    res.status(200).json(streuner)
}

//Katzen-ID vom Button
export async function getStreunerId(req, res) {
    try{
        const id = req.params.id //liest ID aus der URL!!!!
        const streuner = await allStreunerId(id)
         res.status(200).json(streuner)
    }catch (error) {
        console.log(error)
        res.status(500).json({ error: "Fehler beim Laden des Streuners" })
    }
}

//Streuner anheuern Parameter holen

export async function assignStreuner(req, res) {
    console.log("ALLE EMPFANGENEN COOKIES:", req.cookies);
    try {
        const {catId} = req.params;
        const clanId = req.cookies.clan; //clan= Parametername, den ich im clg bekomme

        //Sind beide Variablen da?
        if (!clanId) {
            return res.status(400).json({ success: false, error: 'Kein Clan-Cookie gefunden. Bitte wähle erst einen Clan aus!' });
        }
        if (!catId) {
            return res.status(400).json({ success: false, error: 'Keine Katzen-ID übergeben.' });
        }

        const result = await assignmentService(catId, clanId);

        return res.json({
            success: true,
            message: "Streuner erfolgreich angeheuert und Fisch-Cash verrechnet",
            dbResult: result
        });
    } catch (error) {
        console.log("Fehler im Controller", error.message);

        /* return res.status(400).json({ 
            success: false, 
            error: error.message || 'Fehler beim Anheuern des Streuners.' 
        }); */
    }
    
}