import React, {useState, useEffect} from 'react'

const App = () => {
  
  const [recipe, setRecipe] = useState([]);
  
  const API_ID = '92e3e3fb';
  const API_KEY = '2ab633677e5c7f99c9fa698846eb1858'
  

  useEffect(() => {
    getRecipe();
  }, []);


  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json()

    console.log(data);


    
  }

  
  
  
  
  
  
  return (
    <div className="App">
      <h1>Title</h1>

      <form  className="search-form"></form>



    </div>
  )
}


export default App;
