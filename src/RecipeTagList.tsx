import RecipeTag from './RecipeTag'
import { IRecipeTagListProps } from './IRecipeTagListProps'

export default function RecipeTagList(
    { recipeTagListProps }: { recipeTagListProps: IRecipeTagListProps }
) {
  return (
    <div style={{ paddingBottom: "20px" }}>
      {recipeTagListProps.tagList.map(tag => (
        <RecipeTag key={tag} recipeTagProps={{ tagName: tag, onSelectTag: recipeTagListProps.onSelectTag }} />
      ))}
    </div>
  )
}
