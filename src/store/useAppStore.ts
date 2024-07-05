import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { RecipeSliceType, createRecipesSlice } from './recipeSlice'
import {FavoritesSliceType,createFavoritesSlice} from './favoritesSilce'
import {NotificationSliceType,createNotificationSlice} from './notificationSlice'
//creamos el store principal en base a los store mas pequeños y le pasamos el tipo de datps de los 2
export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({
    //conectamos mis stores mas pequeños con el store principal
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))