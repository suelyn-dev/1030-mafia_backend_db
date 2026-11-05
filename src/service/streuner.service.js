import { assignStreunerIdCash, getAllStreuner, getStreunerById } from "../repositories/streuner.repository.js";


export async function allStreuner(){
    const streuner = await getAllStreuner()
    return streuner
}

//Katzen-ID vom Button
export async function allStreunerId(id) {
    const streuner = await getStreunerById(id)
    return streuner
}

//Streuner anheuern Service
export async function assignmentService(catId, clanId) {
    const result = await assignStreunerIdCash(catId, clanId)
    return result
}