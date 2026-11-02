import { newClan } from "../service/clan.service.js";

export async function createNewClan(req,res) {
    const result = await newClan(req.body)
    res.status(202).json(result)
    
}