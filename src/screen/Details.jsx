
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardDetails from '../component/CardDetails/CardDetails'
import '../screen/Detail.scss'
import { useNavigate } from "react-router-dom";
import { FaHome} from 'react-icons/fa';

function Details() {
    const params = useParams();
    const [details,setdetails] = useState({});
    const [loading,setloading] = useState(true)
    const navigate = useNavigate();
    console.log(params)

    const fetchDetails = () => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=f656a3e4a7054753873211018220803&q='+params.name+'&days=3&aqi=no&alerts=no')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setdetails(data)
        setloading(false);
    
    })
    .catch(setloading(true))}

    useEffect(() => {
        fetchDetails();
    },[])

    console.log(details)
  return (
      <div className="container">
         <FaHome className='icon' size='4em' color='white' onClick={() =>{
              navigate('/')
            
          }} />
     <div className="containerCard">
    {loading ?null: details.forecast.forecastday.map((e) => {
         return  <CardDetails 
            key={Math.random()}
            date={e.date}
            name={details.location.name}
            region={details.location.region}
            country={details.location.country}
            degree={e.day.avgtemp_c}
            humidity={e.day.avghumidity}
            img={e.day.condition.icon}
            wind={e.day.avgvis_miles}
            text={e.day.condition.text}
        /> 
        })
    }
    </div>
    </div>
  )
}

export default Details