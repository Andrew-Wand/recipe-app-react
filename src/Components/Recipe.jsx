import React from 'react'
import { Link } from "react-router-dom";
import 'animate.css';

function Recipe({recipe, ingredients}) {
  return (
    <div className="recipe-container animate__animated animate__fadeInUp">

    <div className="recipe-info-container">
        <div className="recipe-title">
          <h1>{recipe.recipe.label}</h1>
        </div>
      </div>

      
      <div className="ingredients-container">
        <img src={recipe.recipe.image} alt="recipe images" className="recipe-img" />

        <p className='recipe-info'><span style={{ color: 'red' }}>{recipe.recipe.calories.toFixed()}</span> Calories | <span style={{ color: 'red' }}>{recipe.recipe.ingredients.length}</span> Ingredients</p>
        </div>
      

     
      
      
    
      <Link to={`/recipe/${recipe.recipe.label}`} state={{data: recipe}} className='fullrecipe-btn'>Full Recipe</Link>
  
      
      

    </div>
  )
}

export default Recipe