import {StateCreator} from 'zustand'
import { FavoritesSliceType } from './favoritesSilce'
//tipo de dato de mi notificacion que sera un objeto
type Notification = {
    text:string
    error:boolean
    show:boolean
}
//tipado de mi state y mis acciones
export type NotificationSliceType={
 notification:Notification
 showNotification:(payload:Pick<Notification,'text'|'error'>)=>void
 hideNotification: () => void
}

//consumimos los datos del otro slice co esto & RecipeSliceType, [],[], NotificationSliceType 
export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType ,[],[],NotificationSliceType>=(set,get)=>({
  notification:{
    text:'',
    error:false,
    show:false
  },
  showNotification:(payload)=>{
    set({
      notification:{
        text:payload.text,
        error:payload.error,
        show:true
      }
    })
    //esto es para cuando se muestre la notificacion se cierre despues de 5 segundos
    setTimeout(()=>{
      get().hideNotification()
    },5000);
  },

  //ocultar notificacion..
  hideNotification:()=>{
    set({
      notification:{
        text:'',
        error:false,
        show:false
      }
    })
  }
})