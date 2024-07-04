import {z} from 'zod'

//definimos la estructura de la respuesta de nuestra api
//la api nos regresa {[{''}]}
export const CategoriesAPIResponseSchema = 
z.object({
    drinks:z.array(z.object({
        strCategory:z.string()
    }))
})
//estructura de nuestro state local
export const SearchFiltrerShema = z.object({
     ingredient:z.string(),
     category:z.string()
})
//estructura de lo que tendra el array de la respuesta
export const DrinkAPIResponse = z.object({
    idDrink:z.string(),
    strDrink:z.string(),
    strDrinkThumb:z.string()
})
//estructura de la respuesta
export const DrinksAPIResponse = z.object({
    drinks:z.array(DrinkAPIResponse)
})