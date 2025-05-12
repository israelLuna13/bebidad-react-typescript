import { StateCreator } from "zustand";
import IAService from "../services/IAService";

//types de los state y funciones/acciones
export type AISlice ={
    recipe:string
    isGenerating:boolean // para deshabilitar el boton
    generateRecipe:(prompt:string)=>Promise<void>
}

export const createIASlice: StateCreator<AISlice> = (set) => ({
  recipe: "",
  isGenerating:false,
  
  generateRecipe: async (prompt) => {
    //limpiamos la respuesta anterior
    set({recipe:'',isGenerating:true})
    const data = await IAService.genearteRecipe(prompt);


    //recorremos los datos por partes y los vamos poiendo en el state para mostrarlos
    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }
    set({isGenerating:false})
  },
});