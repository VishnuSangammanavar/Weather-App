import React, { useEffect, useState } from 'react'
import { weatherUrl, forecastUrl, key } from '../Api';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

const Weather = () => {

    const [search, setSearch] = useState("Belagavi");

    const [weather, setWeather] = useState(null);
    const [list, setList] = useState(null);
    const [main, setMain] = useState(null);
    const [city, setCity] = useState(null);

    const inputEvent = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const getData = async () => {
          const weatherFetch = await fetch(`${weatherUrl}q=${search}&units=Metric&appid=${key}`);
          const forecastFetch = await fetch(`${forecastUrl}q=${search}&units=Metric&appid=${key}`);
        
          Promise.all([weatherFetch, forecastFetch])
          .then(async (response) => {
              const weatherResponse = await response[0].json();
              const forecastResponse = await response[1].json();
        
              setWeather(weatherResponse)
              setMain(weatherResponse.main)
              setList(forecastResponse.list)
              setCity(forecastResponse.city)
          })
          .catch((err) => console.log(err))
        }
      
        getData()
    }, [search])

    const formatDate = (arg) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tursday', 'Friday', 'Sataurday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
      
        const date = new Date();
        let hrs = date.getHours()
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
      
        let period = hrs > 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;
        hrs = hrs < 10 ? "0" + hrs : hrs;
      
        let d1 = date.getDate()
        d1 = d1 < 10 ? "0" + d1 : d1
      
        let day = days[date.getDay()]
        let month = months[date.getMonth()]
        let year = date.getFullYear()
      
        if (arg === 1) {
          return `${hrs}:${min} ${period}`
        }
        if (arg === 2) {
          return `${day}, ${d1} ${month} ${year}`
        }
    }
      
    const sunRaiseSunSet = (time) => {
        const date = new Date(time);
      
        let hrs = date.getHours()
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
      
        let period = hrs > 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;
        hrs = hrs < 10 ? "0" + hrs : hrs;
      
        return `${hrs}:${min} ${period}`
    }

  return (
    <section>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="row weather">
                    <WeatherInfo search={search} inputEvent={inputEvent} weather={weather} main={main} city={city} />
                    <WeatherForecast formatDate={formatDate} sunRaiseSunSet={sunRaiseSunSet} weather={weather} main={main} list={list} city={city} />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Weather