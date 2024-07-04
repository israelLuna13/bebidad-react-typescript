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
    strDrinkThumb:z.string(),
    
})
//estructura de la respuesta
export const DrinksAPIResponse = z.object({
    drinks:z.array(DrinkAPIResponse)
})
export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
  });
