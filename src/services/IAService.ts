import {streamText} from 'ai'
import { openrouter } from '../lib/ia'
export default {
    async genearteRecipe(prompt:string){
        
        const result = streamText({
            model:openrouter('meta-llama/llama-4-maverick:free'),
            prompt,
            system:'eres un bartender con mas de 10 años de experiencia',
            temperature:1
                })
        return result.textStream
        
    }
}