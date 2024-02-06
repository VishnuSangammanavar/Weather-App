import React from 'react'
import Search from './Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';

const WeatherInfo = ({search, inputEvent, weather, main, city, hour, peroid}) => {

  return (
    <div className="col-lg-3 col-md-4 weather-info" style={ {backgroundImage: `${(hour>5) && (peroid === 'PM')? "url('./img/night.jpg')": "url('./img/day.jpg')"}`} }>
      <div className="content">
        <Search search={search} inputEvent={inputEvent} />
        {main && city?
        <>
            <h1 className='city'><LocationOnIcon />{city.name}</h1>
            <div className="img">
              <img src={`./icons/${weather.weather[0].icon}.png`} width={200} alt="Weather" />
            </div>
            <div>
              <h2 className='temp'>{Math.round(main.temp)}°C</h2>
            </div>
            <h2>{weather.weather[0].description}</h2>
            <div className='d-flex justify-content-center align-items-center gap-5 my-4'>
              <div className="humidity">
                  <h5><WaterDropIcon fontSize='medium' /> {main.humidity}%</h5>
                  <p>Humidity</p>
              </div>
              <div className='wind'>
                  <h5><AirIcon fontSize='medium' /> {weather.wind.speed} m/h</h5>
                  <p className='min-temp'>Wind Speed</p>
              </div>
            </div>
        </>
        :
        <>
          <img src="./icons/unknown.png" alt="!weather" className='py-2' />
          <h2>No data found</h2>
        </>}
      </div>
    </div>
  )
}

export default WeatherInfo