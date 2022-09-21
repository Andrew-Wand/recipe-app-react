import React, {useState, useEffect} from 'react'
import Recipe from "./Components/Recipe";

const App = () => {
  
  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState();
  // const [query, setQuery] = useState();
  
  const API_ID = '92e3e3fb';
  const API_KEY = '2ab633677e5c7f99c9fa698846eb1858'
  

  // useEffect(() => {
  //   getRecipe();
  // }, [query]);


  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
    setSearch('');
    getRecipe();
  }

  const getRandom = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}&random=true`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const randomRecipe = (e) => {
      e.preventDefault();
      getRandom();
     
  }

  
  return (
    <div className="App">
      <h1>Title</h1>
      <form  className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-input" value={search} onChange={updateSearch} />
        <button className="search-btn">Search</button>
        
      </form>
      <form onSubmit={randomRecipe} >
        <button className="random-btn">Random</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

     
    </div>
  )
}


export default App;
