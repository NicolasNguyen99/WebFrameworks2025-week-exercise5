import { IRecipeListProps } from "./IRecipeListProps";
import Recipe from "./Recipe";

export default function RecipeList(
    { recipeListProps } : { recipeListProps: IRecipeListProps }
) {
  return (
    <>
      <div>
        {recipeListProps.recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipeProps={{ recipeData: recipe }} />
        })}
      </div>
    </>
  )
}
