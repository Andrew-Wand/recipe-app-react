import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

function Header({search, setSearch, handleSubmit, recipe, getRecipe}) {

const logoIcon = <FontAwesomeIcon icon={faUtensils} />
const glassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />


const storageItems = JSON.parse(localStorage.getItem('allTerms'));


function getUniqueListBy(storageItems, key) {
  return [...new Map(storageItems.map(item => [item[key], item])).values()]
}

const arr1 = getUniqueListBy(storageItems, 'search');

arr1.forEach((item, i) => {
  item.id = i + 1;
});



const updateSearch = (e) => {
    setSearch(e.target.value);
  }

const searchRecent = (e) => {
    const btnValue = e.target.value;

    const searchInput = document.getElementById('search-input');

    searchInput.value = btnValue;
    
    setSearch(btnValue);
  
}





function removeBtn() {
 

}


  return (
    <nav className="header-container">

      <div className="logo-container">
    
        <h1> <i className='logo-icon'>{logoIcon}</i>Recipe Search</h1>

      </div>
        
            <form className="search-form" onSubmit={handleSubmit}>
                <i className="glass-icon">{glassIcon}</i>
                <input type="text" className="search-input" id='search-input' value={search} onChange={updateSearch} placeholder='Search here...' autoComplete='on' />
                <input className="search-btn" type='submit' value='Search' />
                <div className="recent-search-container">
                {/* <ol className='recent-list'>
                  {arr1.map((item, index) => {
                    return ( 
                    
                    <li>
                      <input onClick={searchRecent} type='button' value={item.search} className='recent-btn' id='recent-btn' />
                      <button onClick={() => removeBtn(index)} className='remove-btn' id='remove-btn'>X</button>
                    </li>
                  
               )
              })}
              
                </ol> */}
            </div>
            </form>


            
           
    
    
   
    </nav>

    
    
  )
}

export default Header