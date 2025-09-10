import { IRecipeTagProps } from "./IRecipeTagProps"

export default function RecipeTag(
    { recipeTagProps }: { recipeTagProps: IRecipeTagProps }
) {
  return (
    <div 
        style={{ border: '1px solid black', padding: '5px'}} 
        onClick={() => recipeTagProps.onSelectTag(recipeTagProps.tagName)}
      >
      {recipeTagProps.tagName}
    </div>
  )
}
    