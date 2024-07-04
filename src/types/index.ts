import  {z} from 'zod'
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFiltrerShema } from '../utils/recipies-schema'
//definimos el tipo y le pasamos el esquema que debera contener la respuesta
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
//tipo de dato de nuestro state local
export type SearchFiltrer =  z.infer<typeof SearchFiltrerShema>
//tipo de datos para nuestro state de drink
export type Drinks = z.infer<typeof DrinksAPIResponse>

export type Drink = z.infer<typeof DrinkAPIResponse>

export type Recipe = z.infer<typeof RecipeAPIResponseSchema>