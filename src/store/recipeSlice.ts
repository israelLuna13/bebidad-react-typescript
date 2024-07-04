import { StateCreator } from "zustand"
import {getCategories, getRecipies} from "../services/RecipeService"
import { Categories, Drinks, SearchFiltrer } from "../types"

//types de los state y las acciones
export type RecipeSliceType={
    drinks:Drinks
    categories:Categories,
    fetchCategories: () => Promise<void>,
    searchRecipies: (SearchFiltrer:SearchFiltrer) => Promise<void>
}

//creamos el state y le damos su tipo de dato
export const createRecipesSlice:StateCreator<RecipeSliceType> = (set) =>({
    //state inicial
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },

    //acciones

    fetchCategories: async ()=>{

        const categories  = await getCategories()
        //escribimos en el state
        set({
            categories
        })    
    },

    //obtenemos las recetas
    searchRecipies:async(filters)=>{
      const drinks =   await getRecipies(filters)
      //escribimos en el state
      set({drinks})
      
    }
})