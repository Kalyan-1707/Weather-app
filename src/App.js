import React , {useState} from "react"
import "./App.css"
import SearchBar from "./SearchBar"
import Card from "./Card"
import {FetchData} from "./FetchData"
function App() {

    const [query,setQuery]=useState('');
    const [weather,setWeather]=useState({})
    
    
    let data="";

    const Fetch=async (e) =>{
        if(e.key==='Enter')
        {
            data = await FetchData(query);
            console.log(data);

            setWeather(data);
            
        }
    }

    return(

        <div className="bgimage ">
            <SearchBar val={query} setQuery={setQuery} Fetch={Fetch}/>
            <Card weather={weather}/>
        </div>

    );
    
}

export  default App