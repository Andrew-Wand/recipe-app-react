import React from 'react'
import { Link, useParams, useLocation } from "react-router-dom";

function FullRecipe() {
const params = useParams();
const location = useLocation();
const data = location.state?.data;


  return (
    <div>
        {data && (
            <div>
                <h3>{params.name}</h3>
            </div>
        )}
    </div>
  )
}

export default FullRecipe