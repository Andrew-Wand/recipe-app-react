import React, {useState, useEffect} from 'react'
import Header from "./Components/Header";
import { Routes, Route} from "react-router-dom";
import FullRecipe from './Components/FullRecipe';
import Home from './Components/Home';


const App = () => {

const [recipes, setRecipes] = useState([]);
const[search, setSearch] = useState('');

const API_ID = '92e3e3fb';
const API_KEY = '2ab633677e5c7f99c9fa698846eb1858'


const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await response.json()
  setRecipes(data.hits);
  console.log(data);
}

const getSearch = (e) => {
  e.preventDefault();
  getRecipe();
}
  
  // const [query, setQuery] = useState();
  


  // useEffect(() => {
  //   getRecipe();
  // }, [query]);


  // const getRandom = async () => {
  //   const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}&random=true`);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // }

  // const randomRecipe = (e) => {
  //     e.preventDefault();
  //     getRandom();
     
  // }

  
  return (
    <div className="App">
      <Header handleSubmit={getSearch} search={search} setSearch={setSearch} />

      <Routes>
        <Route path='/' element={<Home search={search} recipes={recipes} />}></Route>
        <Route path='/recipe/:name' element={<FullRecipe />}></Route>
      </Routes>

      {/* <form onSubmit={randomRecipe} >
        <button className="random-btn">Random</button>
      </form> */}

    </div>
  )
}


export default App;
