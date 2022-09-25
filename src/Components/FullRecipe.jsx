import React from 'react'
import { Link, useParams, useLocation } from "react-router-dom";

function FullRecipe({ingredients}) {

const params = useParams();
const location = useLocation();
const data = location.state?.data;


  return (
    <div>
        {data && (
            <div>
                <h3>{params.name}</h3>
                <img src={data.recipe.image} alt="img" />
                <div className="ingredients-container">
                    <ol>
                        {data.recipe.ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )}


        <Link to='/'>Home</Link>
    </div>
  )
}

export default FullRecipe