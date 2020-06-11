import React from "react"


function SearchBar(props)
{
    return(
        <div className="container valign-wrapper center-align">
            <input className="input-field"
             onKeyPress={props.Fetch}
              type="text" value={props.query} 
              onChange={(e) => props.setQuery(e.target.value)} 
              name="search" 
              id="searchbar"
              
              />                      
        </div>
    );
}


export default SearchBar