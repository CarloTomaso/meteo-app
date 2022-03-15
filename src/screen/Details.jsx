import { ThemeContext } from '@mui/styled-engine';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../component/Card/Card'

function Details() {
    const params = useParams();
    const [details,setdetails] = useState({});
    const [loading,setloading] = useState(true)
    console.log(params)
    const fetchDetails = fetch('http://api.weatherapi.com/v1/forecast.json?key=f656a3e4a7054753873211018220803&q='+params.name+'&days=3&aqi=no&alerts=no')
    .then(response => response.json())
    .then(data => {
        setloading(false);
        console.log(data)
        setdetails(data)
    })
    useEffect(() => {
        fetchDetails();
    },[])

    console.log(details)
  return (
      <>
    {loading ?null:
        details.forecast.forecastday.map((e)=> {
            <Card previsioni={e} />
        })
    }
    </>
  )
}

export default Details