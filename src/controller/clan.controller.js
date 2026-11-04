import { allClans, newClan } from "../service/clan.service.js";

export async function createNewClan(req,res) {
    const result = await newClan(req.body)
    res.status(202).json(result)
    
}

export async function getClans(req, res){
    const clans = await allClans()
    res.status(200).json(clans)
}