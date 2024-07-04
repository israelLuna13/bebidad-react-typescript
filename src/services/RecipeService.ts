import axios from 'axios'
import {CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema} from '../utils/recipies-schema'
import { Drink, SearchFiltrer } from '../types'

export async function getCategories(){
    //url de la api
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    //hacemos el llamado a la api y obtenemos la respuesta de data , por defecto axuios deja el resultado en data
    const {data} = await axios(url)
    //pasamos la respuesta de la api a nuestro esquema
    const result = CategoriesAPIResponseSchema.safeParse(data)
    //si cumple con el esquema
    if(result.success){
        return result.data   
    }       
}

//obtener la receta 
export async function getRecipies(filters:SearchFiltrer){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if(result.success){
      return  result.data
    }   
}
//obtener los ingredientes , forma de prepara de una bebida
export async function getRecipeById(id:Drink['idDrink']){

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data}=await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success){
        return result.data
    }
    
    
}