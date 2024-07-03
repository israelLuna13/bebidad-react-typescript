import axios from 'axios'
import {CategoriesAPIResponseSchema} from '../utils/recipies-schema'

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