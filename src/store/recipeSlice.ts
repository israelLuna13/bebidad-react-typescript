import { StateCreator } from "zustand"
import {getCategories} from "../services/RecipeService"
import { Categories } from "../types"

export type RecipeSliceType={
    categories:Categories,
    fetchCategories: () => Promise<void>
}

//creamos el state y le damos su tipo de dato
export const createRecipesSlice:StateCreator<RecipeSliceType> = (set) =>({
    //state
    categories:{
        drinks:[]
    },

    //acciones

    fetchCategories: async ()=>{

        const categories  = await getCategories()
        //escribimos en el state
        set({
            categories
        })
        console.log(categories);
    
    }
})