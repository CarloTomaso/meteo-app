import React from 'react';
import './CardDetails.scss';

function CardDetails({name,degree,img,text,humidity,wind,region,country,date}) {
  return (
    <div className="card">
        <h1>{date}</h1>
        <h2>{name}</h2>
        <h1>{degree}°C</h1>
        <div className="details">
        <div className="details-card-left">  
                <p>{text}</p>        
                <img src={img} alt="icon" />   
               
        </div>
        <div className="details-card-right">
            <h4>Humidity: {humidity}%</h4>
            <h4>wind: {wind} mph</h4>
        </div>
        </div>
        <div className="region">
            <h3>{region}</h3>
            <h3>{country}</h3>
        </div>
    </div>
  )
}

export default CardDetails