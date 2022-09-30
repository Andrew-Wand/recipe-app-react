import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

function Header({search, setSearch, handleSubmit, recipe}) {

const logoIcon = <FontAwesomeIcon icon={faUtensils} />
const glassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />


const storageItems = JSON.parse(localStorage.getItem('allTerms'));


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
                <input type="text" className="search-input" value={search} onChange={updateSearch} placeholder='Search here...'  />
                <input className="search-btn" type='submit' value='Search' />
            </form>



            <ol>
              {storageItems.map((item) => {
               return ( 
               
               <li >
                 {item.search}
                   </li> 
               )
              })}
              
            </ol>
    
    
   
    </nav>

    
    
  )
}

export default Header