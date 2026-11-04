import { getAllStreuner } from "../repositories/streuner.repository.js";


export async function allStreuner(){
    const streuner = await getAllStreuner()
    return streuner
}
