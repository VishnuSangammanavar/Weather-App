import React from 'react'
import Search from './Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const WeatherInfo = ({search, inputEvent, weather, main, city}) => {
  return (
    <div className="col-lg-3 col-md-4 weather-info">
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
            <div className='d-flex justify-content-center align-items-center gap-3 my-2'>
              <div className="px-3 border-2 border-end label">
                  <p className='max-temp'>Max temp</p>
                  <p className='min-temp'>Min temp</p>
              </div>
              <div className='value'>
                  <p>{main.temp_max}°C</p>
                  <p>{main.temp_min}°C</p>
              </div>
            </div>
        </>
        :<h2>No data found</h2>}
    </div>
  )
}

export default WeatherInfo