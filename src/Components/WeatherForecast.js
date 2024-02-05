import React from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WeatherForecast = ({formatDate, sunRaiseSunSet, weather, main, list, city}) => {
  return (
    <div className="col-lg-9 col-md-8 weather-forecast" style={{ backgroundImage: "url('./bg.jpg')" }}>
        <div className="content">
            <div className="date">
                <h1>{formatDate(1)}</h1>
                <h2>{formatDate(2)}</h2>
            </div>
            <div className="forecast">
                {list?
                <>
                {
                    list.map((value, index) => {
                        if (index >= 18) {
                            return
                        }
                        return (
                            <div className="forecast-item" key={index}>
                                <h3 className='time'>{(value.dt_txt).slice(10, 16)}</h3>
                                <img src={`./icons/${value.weather[0].icon}.png`} alt="" width={50} />
                                <p>{Math.round(value.main.temp)}°C</p>
                            </div>
                        )
                    })
                }
                </>
                :null}
            </div>
            {main && city?
                <div className="highlights">
                    <div className="row gap-4 d-flex justify-content-center">
                    <div className="col-lg-3 col-md-3 highlight-item">
                        <h3>Feels like</h3>
                        <h2><ThermostatIcon fontSize='large' />{Math.round(main.feels_like)}°C</h2>
                    </div>
                    <div className="col-lg-4 col-md-3 highlight-item">
                        <h3>Wind status</h3>
                        <h2><AirIcon color='info' fontSize='large' /> {weather.wind.speed} m/h</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 highlight-item">
                        <h3>Sunrise & Sunset</h3>
                        <p><WbTwilightIcon color='warning' /> {sunRaiseSunSet(city.sunrise)}</p>
                        <p><NightsStayIcon color='warning' /> {sunRaiseSunSet(city.sunset)}</p>
                    </div>
                    <div className="col-lg-3 col-md-3 highlight-item">
                        <h3>Humidity</h3>
                        <h2><WaterDropIcon /> {main.humidity}%</h2>
                    </div>
                    <div className="col-lg-4 col-md-3 highlight-item">
                        <h3>Visibility</h3>
                        <h2><VisibilityIcon /> {(weather.visibility) / 1000} km</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 highlight-item">
                        <h3>Pressure</h3>
                        <h2>{main.pressure} hPa</h2>
                    </div>
                    </div>
                </div>
            :null}
        </div>
    </div>
  )
}

export default WeatherForecast