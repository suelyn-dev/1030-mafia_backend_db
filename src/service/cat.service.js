//Geschäftslogik/ Businesslayer

import { getAllCats, insertNewCat } from "../repositories/cat.repositories.js";

export async function allCats() {
    const cats = await getAllCats()
    return cats
}

export async function createNewDon(cat) {
    cat.cat_rank = 10
    cat.avatar = 'https://mafiacats.onrender.com/cats/12'
    return await insertNewCat(cat)
}