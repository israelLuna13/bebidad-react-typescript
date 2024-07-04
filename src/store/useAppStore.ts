import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { RecipeSliceType, createRecipesSlice } from './recipeSlice'

//toma una copia de todos los argumentos y las pasamos a createRecipes
export const useAppStore = create<RecipeSliceType>()(devtools((...a)=>({
    //toma una copia
    ...createRecipesSlice(...a)
})))