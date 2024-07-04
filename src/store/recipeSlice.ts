import { StateCreator } from "zustand"
import {getCategories, getRecipeById, getRecipies} from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFiltrer } from "../types"
import { FavoritesSliceType } from "./favoritesSilce"

//types de los state y las acciones
export type RecipeSliceType={
    drinks:Drinks
    categories:Categories,
    selectedRecipe:Recipe,
    modal:boolean,
    fetchCategories: () => Promise<void>,
    searchRecipies: (SearchFiltrer:SearchFiltrer) => Promise<void>,
    selectRecipe: (id:Drink['idDrink']) => Promise<void>,
    closeModal:()=>void
}

//creamos el state y le damos su tipo de dato
//consumimos los datos del otro slice co esto & FavoritesSliceType ,[],[],RecipeSliceType 
export const createRecipesSlice:StateCreator<RecipeSliceType & FavoritesSliceType ,[],[],RecipeSliceType > = (set) =>({
    //state inicial
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },

    selectedRecipe:{} as Recipe,

    modal:false,

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
    },

    //ingredientes de una bebida
    selectRecipe:async(id)=>{
         const selectedRecipe = await getRecipeById(id)  
         set({selectedRecipe,modal:true})
    },

    closeModal:()=>{
        set({
            modal:false,
            selectedRecipe:{} as Recipe
        })
    }
})