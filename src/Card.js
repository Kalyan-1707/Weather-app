import React from "react"


function Card(props)
{
    if (props.weather.main)
    return (
           
        <div className="container">
        <div className="card">
            <div className="card-content center-align">
                <div className="card-title card-item">
                <span className="country">
                    {props.weather.name}
                </span>
                <sup className="btn-floating btn-small  orange">
                    {props.weather.sys.country}
                </sup>
                    </div>
                
            <div className="card-item">
                {props.weather.main.temp}
                <sup className="btn-floating btn-small blue disabled">
                    &deg;C
                </sup>
                </div>
            <div className="card-item"><img src={"http://openweathermap.org/img/w/"+ props.weather.weather[0].icon + ".png"} alt="icon"/></div>
            <div className="desc">{props.weather.weather[0].description}</div>
        </div>
        </div>
        </div>

    );
    else
     return <div></div>
}


export default Card