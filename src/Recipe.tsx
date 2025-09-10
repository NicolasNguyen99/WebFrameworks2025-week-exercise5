import { IRecipeProps } from "./IRecipeProps";

export default function Recipe(
    { recipeProps }: { recipeProps: IRecipeProps }
) {
  return (
    <div style ={{ border: "1px solid black", margin: "10px", padding: "10px" }}> 
        <h2>{recipeProps.recipeData.name}</h2>

        <h4>Ingredients</h4>
        <ul>
            {recipeProps.recipeData.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>

        <h4>Instructions</h4>
        <ol>
            {recipeProps.recipeData.instructions.map((instruction, index) => {
                return <li key={index}>{instruction}</li>
            })}
        </ol>
    </div>
  )
}
