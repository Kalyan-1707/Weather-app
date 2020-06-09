import React from "react"


function SearchBar(props)
{
    return(
        <div >
            <input className="form-control" onKeyPress={props.Fetch} type="text" value={props.query} onChange={(e) => props.setQuery(e.target.value)} name="search" id="searchbar"/>
           
        </div>
    );
}


export default SearchBar