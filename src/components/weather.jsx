
import Search from "./search"
import CurrentWeather from "./currentWeather";
import { WEATHER_API_URL , WEATHER_API_KEY} from "../api";
import { useState } from "react";
import ForecastWeather from "./forecastWeather";


const Weather = () => {
    const [currentWeather , setCurrentWeather] =  useState(null);
    const [forecastWeather , setForecastWeather] =  useState(null);

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
        //spilit with space to store lat and lon of the city
        const [lat , lon ] = searchData.value.split(" ");

        //fetch current weather and forcast APIs 
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        
        const forcastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch , forcastWeatherFetch])
        .then(async(response) => {
            const weatherResponse = await response[0].json();
            setCurrentWeather({city: searchData.label , ...weatherResponse});

            const forecastResponse = await response[1].json();
            setForecastWeather({city: searchData.label , ...forecastResponse});
        })
        .catch( (err) => console.log(err));
    }
    
    console.log(currentWeather);
    console.log(forecastWeather);
    return ( 
        <>
        <h1 className="text-light">Weather</h1>
        <Search onSearchChange={handleOnSearchChange}/>
        { currentWeather && <CurrentWeather data={currentWeather}/>}
        
        { forecastWeather &&  <ForecastWeather data={forecastWeather}/>}
       
        </>
     );
}
 
export default Weather;