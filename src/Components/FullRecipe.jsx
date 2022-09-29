import React from 'react'
import { Link, useParams, useLocation } from "react-router-dom";

function FullRecipe({ingredients}) {

const params = useParams();
const location = useLocation();
const data = location.state?.data;


  return (
    <div className='fullrecipe-container'>
        {data && (
            <div >
                <h3 className='fullrecipe-title'>{params.name}</h3>
                <img className='recipe-img' src={data.recipe.image} alt="img" />
                <div className="fullrecipe-ingred">
                    <ol>
                        {data.recipe.ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    
                </div>
                <Link to='/' className='back-btn'>Back</Link>
            </div>
        )}


        
    </div>
  )
}

export default FullRecipe