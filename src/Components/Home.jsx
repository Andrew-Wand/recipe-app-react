import React from 'react'
import Recipe from './Recipe';



function Home({recipes, search}) {
  return (
    <div className="recipes">
        
        {recipes.map((recipe) => {
            return <Recipe  
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} 
            search={search}
            recipe={recipe}
            />
        })}
        
        
        
  </div>
  )
}

export default Home