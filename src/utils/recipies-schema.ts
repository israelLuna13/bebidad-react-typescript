import {z} from 'zod'

//definimos la estructura de la respuesta de nuestra api
//la api nos regresa {[{''}]}
export const CategoriesAPIResponseSchema = 
z.object({
    drinks:z.array(z.object({
        strCategory:z.string()
    }))
})