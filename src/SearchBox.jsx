import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) { 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5715c9073d1acbedca66dbcc89b5c48a";
    let [city, setCity] = useState("");
    let [error, setError] =useState(false);

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let result = await getWetherInfo(); 
            updateInfo(result);
        } catch(error) {
            setError(true)
        }
      
    }

    let getWetherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                city:city,
                temp : data.main.temp,
                tempMin : data.main.temp_min,
                tempMax : data.main.temp_max,
                humidity  : data.main.humidity,
                feelsLike : data.main.feels_like,
                weather : data.weather[0].description
            }
            return result;
        } catch(error) {
            throw error;
        }
       
    }

    return ( 
        <div className="SearchBox">
            <form action="" onSubmit={handleSubmit}>
             <TextField id="city" onChange={handleChange} value={city} label="City Name" variant="outlined" required/>
             <Button id="btn" type='submit' variant="contained" startIcon={<SearchIcon />}>Search</Button>
             {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}