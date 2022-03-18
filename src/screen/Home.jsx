import React, {useState, useEffect} from 'react'
import InputSearch from '../component/InputSearch/Input'
import Card from '../component/Card/Card'
import search from '../assets/search.png'
import { useNavigate } from "react-router-dom";


function Home() {
    const [citta, setcitta] = useState('');
    const [location,setlocation] = useState({});
    const [loading, setloading] = useState(true);
    const [hasError,sethasError] = useState(false);
    const navigate = useNavigate();
    
console.log('...',hasError)
   
    const fetchLocation = () => {
        fetch('https://api.weatherapi.com/v1/current.json?key=f656a3e4a7054753873211018220803&q='+citta+'&aqi=no')
        .then((response) => {
            console.log(response)
                 if(response.ok){
                     console.log('ooooo')
                }else{
                    sethasError(true)
                    console.log('aaaaaaa')
                }
                 return response.json()
            })
        .then(data => {
            console.log(hasError, data)
            if(!data.error){
                setlocation(data);
                setloading(false);
               
                if(data.current.temp_c >=16){
                    document.querySelector('.App').classList.add('hot');
                    document.querySelector('.App').classList.remove('cold');
    
                };
                if(data.current.temp_c <=16){
                    document.querySelector('.App').classList.add('cold')
                    document.querySelector('.App').classList.remove('hot');
                }
            }
        })
    }
       
    
        console.log(location)

        if(hasError===true){
            setTimeout(() => {
                navigate('/')
            }, 2000);
            return(
                <>

                <h1>Città non trovata</h1>
                <h2>Verrai reindirizzato alla home</h2>
                </>
            )
        }

  return (
      <>
        <InputSearch value={citta}  onChange={(valore) => {
            setcitta(valore)
        }} >
            <a onClick={(e) => {
                fetchLocation();
        }}><img src={search} /></a>
        </InputSearch>
    {
        loading  ?
            null
            :<Card
            name={location.location.name}
            region={location.location.region}
            country={location.location.country}
            degree={location.current.temp_c}
            humidity={location.current.humidity}
            img={location.current.condition.icon}
            wind={location.current.wind_mph}
            text={location.current.condition.text}
            />
    }
  
    
</>
  )
}

export default Home