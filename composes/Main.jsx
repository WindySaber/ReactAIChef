import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main(){
    const [ingredients,setIngredients] = React.useState([])
    const [recipe,setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    function submitLog(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(ingredients => [...ingredients,newIngredient])
        event.currentTarget.reset() // 清空输入框
    }

    React.useEffect(function(){
        if(recipe !== "" && recipeSection.current !== null)
            recipeSection.current.scrollIntoView({behavior:"smooth"})
    },[recipe])

    async function getRecipe() {
        // ✅ 改为调用后端 API，而不是 import 函数
        try {
            const res = await fetch('http://localhost:3000/api/recipe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients: ingredients })
            })
            
            const data = await res.json()
            setRecipe(data.recipe)
        } catch (err) {
            setRecipe(`**请求失败**: ${err.message}\n\n请确保后端在运行：node backend/server.js`)
        }
    }

    return (
        <main>
            <form action="Input" className="add-ingredient-form" onSubmit={submitLog}>
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}  ref={recipeSection} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}