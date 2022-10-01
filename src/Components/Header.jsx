import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

function Header({search, setSearch, handleSubmit, recipe}) {

const logoIcon = <FontAwesomeIcon icon={faUtensils} />
const glassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />


const storageItems = JSON.parse(localStorage.getItem('allTerms'));


function getUniqueListBy(storageItems, key) {
  return [...new Map(storageItems.map(item => [item[key], item])).values()]
}

const arr1 = getUniqueListBy(storageItems, 'search')


const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <nav className="header-container">

      <div className="logo-container">
       
        <h1> <i className='logo-icon'>{logoIcon}</i>Recipe Search</h1>

        
      </div>
        
            <form className="search-form" onSubmit={handleSubmit}>
                <i className="glass-icon">{glassIcon}</i>
                <input autoFocus type="text" className="search-input" value={search} onChange={updateSearch} placeholder='Search here...'  />
                <input className="search-btn" type='submit' value='Search' />
            </form>


            <div className="recent-search-container">
              <ol className='recent-list'>
                {arr1.map((item) => {
                  return ( 
               
                    <li>
                      {item.search}
                    </li> 
               )
              })}
              
                </ol>
            </div>
           
    
    
   
    </nav>

    
    
  )
}

export default Header