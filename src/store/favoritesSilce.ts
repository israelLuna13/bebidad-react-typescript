import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

export type FavoritesSliceType={
    favorites:Recipe[],
    handleClickFavorite:(recipe:Recipe)=>void,
    favoriteExist:(id: Recipe['idDrink'])=>boolean,
    loadFromStorage: () => void
}

//consumimos los datos del otro slice co esto & RecipeSliceType, [],[], FavoritesSliceType 
export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType & NotificationSliceType, [],[], FavoritesSliceType>=(set,get,api)=>({
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
                //esta accion viene desde el slice de notificacion
                createNotificationSlice(set,get,api).showNotification(
                    {text:'Se elimino de favoritos',
                    error:true})
        }else{
            //escribimos en el state
            set((state)=>({
                favorites:[... state.favorites,recipe]

            }))
            //esta accion viene desde el slice de notificacion
            createNotificationSlice(set,get,api).showNotification(
                {text:'Se agrego a favoritos',
                error:false})
        }
        //llamaos la accion del otro slice, cuando se agregue o se elimine de fav , se cerrara el modal
        createRecipesSlice(set,get,api).closeModal()
        //agregamos a localstorage
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    //validar si existe favorito
    favoriteExist:(id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    //poner en el state de favoritos  lo que este en el local storage
    loadFromStorage:() =>{
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites:JSON.parse(storedFavorites)
            })
        }
    }
})