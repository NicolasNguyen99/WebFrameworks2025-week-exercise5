import { IRecipe } from "./IRecipe";
import RecipeList from "./RecipeList";
import RecipeTagList from "./RecipeTagList";
import React, { useEffect, useState } from "react";


const App = () => {

  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isTagListVisible, setIsTagListVisible] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  const fetchRecipesByTag = (tag: string) => {
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.recipes);
        setIsTagListVisible(false);
      });
  };

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>

         {isTagListVisible && <div>
          <p>Choose a tag below</p>
          <RecipeTagList recipeTagListProps={{ tagList: tags, onSelectTag: (tag) => { fetchRecipesByTag(tag); setSelectedTag(tag); } }} />
        </div>}

        {!isTagListVisible && <div>
          <h2>Recipes for {selectedTag}</h2>
          <button onClick={() => setIsTagListVisible(true)}>Back</button>
          <RecipeList recipeListProps={{ recipes: recipes }} />
        </div>}
    </div>
  );
};

export default App;
