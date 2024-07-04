import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'

export type FavoritesSliceType={
    favorites:Recipe[],
    handleClickFavorite:(recipe:Recipe)=>void,
    favoriteExist:(id: Recipe['idDrink'])=>boolean
}

//consumimos los datos del otro slice co esto & RecipeSliceType, [],[], FavoritesSliceType 
export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType, [],[], FavoritesSliceType>=(set,get,api)=>({
    //state
    favorites:[],
    //acciones
    handleClickFavorite:(recipe)=>{
        //si se quiere seleccionar una receta que ya esta en favoritos 
        if(get().favoriteExist(recipe.idDrink)){
            //eliminamos esa receta de favoritos
                set((state)=>({
                    favorites:state.favorites.filter(favorite=>favorite.idDrink != recipe.idDrink)
                }))
        }else{
            //escribimos en el state
            set((state)=>({
                favorites:[... state.favorites,recipe]

            }))
        }
        //llamaos la accion del otro slice, cuando se agregue o se elimine de fav , se cerrara el modal
        createRecipesSlice(set,get,api).closeModal()
        
    },

    //validar si existe favorito
    favoriteExist:(id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})
