import { getAllStreuner, getStreunerById } from "../repositories/streuner.repository.js";


export async function allStreuner(){
    const streuner = await getAllStreuner()
    return streuner
}

//Katzen-ID vom Button
export async function allStreunerId(id) {
    const streuner = await getStreunerById(id)
    return streuner
}