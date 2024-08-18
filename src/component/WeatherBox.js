import React from 'react'

const WeatherBox = ({weather}) => {
    // console.log("w", weather);
  const fahrenheit = ((weather?.main.temp * 9 / 5) + 32).toFixed(1);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp.toFixed(1)}℃ / {fahrenheit}℉</h2>    
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox