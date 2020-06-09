import React from "react"


function Card(props)
{
    if (props.weather.main)
    return (
           
        
        <div className="card">
            <div className="card-item ">
                <span className="country">
                    {props.weather.name}
                </span>
                <sup>
                    {props.weather.sys.country}
                </sup>
                </div>
            <div className="card-item">
                {props.weather.main.temp}
                <sup>
                    &deg;C
                </sup>
                </div>
            <div className="card-item"><img src={"http://openweathermap.org/img/w/"+ props.weather.weather[0].icon + ".png"} alt="icon"/></div>
            <div className="desc">{props.weather.weather[0].description}</div>
        </div>

    );
    else
     return <div></div>
}


export default Card