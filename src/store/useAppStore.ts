import {create} from 'zustand'
import { RecipeSliceType, createRecipesSlice } from './recipeSlice'

//toma una copia de todos los argumentos y las pasamos a createRecipes
export const useAppStore = create<RecipeSliceType>((...a)=>({
    //toma una copia
    ...createRecipesSlice(...a)
}))