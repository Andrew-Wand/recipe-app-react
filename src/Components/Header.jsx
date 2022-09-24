import React from 'react'

function Header({search, setSearch, handleSubmit}) {


const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <nav className="header-container">
        <h1>Recipe Search</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-input" value={search} onChange={updateSearch} />
                <input className="search-btn" type='submit' value='Search' />
            </form>
    
    
   
    </nav>

    
    
  )
}

export default Header