import "./WeatherApp.css"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weather, setWeather] = useState({
        city : "Pune",
        feelsLike: 29.11,
        humidity: 38,
        temp: 29.67,
        tempMax: 29.67,
        tempMin: 29.67,
        weather: "clear sky",
    });

    let updateInfo = (result) => {
        setWeather(result);
    }

    return(
        <div className="WeatherApp">
            <h2>
                Weather app by @omdhaktode
            </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weather}/>
        </div>
    )
}