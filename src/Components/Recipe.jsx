import React from 'react'
import { Link } from "react-router-dom";

function Recipe({recipe, ingredients}) {
  return (
    <div className="recipe-container">


      {/* Hover ingredients */}
      <div className="ingredients-container">
        <img src={recipe.recipe.image} alt="recipe images" className="recipe-img" />
        <div className="ingredients">
          <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
            ))}
          </ol>
            </div>
        </div>
      

      <div className="recipe-info-container">
        <div className="recipe-info">
          <h1>{recipe.recipe.label}</h1>
        </div>
      </div>
      
      
    <button className="fullrecipe-btn">
      <Link to={`/recipe/${recipe.recipe.label}`} state={{data: recipe}}>Full Recipe</Link>
    </button>
      
      

    </div>
  )
}

export default Recipe