import React from "react"


function SearchBar(props)
{
    return(
        <div className="container search-conatiner center-align">
           <div className="row"> 
            <div className="col s12 m10 offset-m1 l4 offset-l4">
            <input className="input-field"
             onKeyPress={props.Fetch}
              type="text" value={props.query} 
              onChange={(e) => props.setQuery(e.target.value)} 
              placeholder="Your city name..."
              name="search" 
              id="searchbar"
              
              />               
                </div>
            </div>       
        </div>
    );
}


export default SearchBar