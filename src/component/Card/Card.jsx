import React from 'react'
import './Card.scss'
import { useNavigate } from "react-router-dom";


function Card({name,region,country,degree,img,humidity,wind,text}) {
    const navigate = useNavigate()
  return (
    <div className="card" onClick={() => {
        navigate('/details/' + name )
    }}>
        <h2>{name}</h2>
        <h1>{degree}°C</h1>
        <div className="details">
        <div className="details-card-left">        
                <img src={img} alt="icon" />   
                <p>{text}</p>  
        </div>
        <div className="details-card-right">
            <h4>Humidity : {humidity}%</h4>
            <h4>wind : {wind} mph</h4>
        </div>
        </div>
        <div className="region">
            <h3>{region}</h3>
            <h3>{country}</h3>
        </div>
    </div>
  )
}

export default Card