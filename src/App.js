import React, {useState, useEffect} from 'react'
import Recipe from "./Components/Recipe";

const App = () => {
  
  const [recipes, setRecipes] = useState([]);
  
  const API_ID = '92e3e3fb';
  const API_KEY = '2ab633677e5c7f99c9fa698846eb1858'
  

  useEffect(() => {
    getRecipe();
  }, []);


  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json()
    console.log(data.hits);
    setRecipes(data.hits);


    
  }

  
  
  
  
  
  
  return (
    <div className="App">
      <h1>Title</h1>
      <form  className="search-form">
        <input type="text" className="search-input" />
        <button className="search-btn">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          
          />
        ))}
      </div>



    </div>
  )
}


export default App;