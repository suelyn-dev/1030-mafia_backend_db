//Wir werden die http Requests und Responses behandelt

import { allCats } from "../service/cat.service.js";

export async function getCats(req, res){
    const cats = await allCats()
    res.status(200).json(cats)
}
