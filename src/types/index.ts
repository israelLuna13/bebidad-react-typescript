import  {z} from 'zod'
import { CategoriesAPIResponseSchema } from '../utils/recipies-schema'
//definimos el tipo y le pasamos el esquema que debera contener la respuesta
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>