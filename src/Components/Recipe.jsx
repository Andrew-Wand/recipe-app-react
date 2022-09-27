import React from 'react'
import { Link } from "react-router-dom";

function Recipe({recipe, ingredients}) {
  return (
    <div className="recipe-container">

    <div className="recipe-info-container">
        <div className="recipe-info">
          <h1>{recipe.recipe.label}</h1>
        </div>
      </div>

      {/* Hover ingredients */}
      <div className="ingredients-container">
        <img src={recipe.recipe.image} alt="recipe images" className="recipe-img" />
        </div>
      

     
      
      
    {/* <button className="fullrecipe-btn"> */}
      <Link to={`/recipe/${recipe.recipe.label}`} state={{data: recipe}} className='fullrecipe-btn'>Full Recipe</Link>
    {/* </button> */}
      
      

    </div>
  )
}

export default Recipe