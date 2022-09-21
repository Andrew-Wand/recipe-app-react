import React from 'react'

function Recipe({title, image, ingredients}) {
  return (
    <div className="recipe-container">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="" className="recipe-img" />
    </div>
  )
}

export default Recipe