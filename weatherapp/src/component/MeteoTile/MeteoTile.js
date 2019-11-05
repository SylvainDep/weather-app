import React from 'react'

import './MeteoTile.css'

const MeteoTile = (props) => {
  console.log(props)

  const imgURL = "http://openweathermap.org/img/wn/" + props.forecast.clearance_icon + "@2x.png";

  let hour = props.forecast.hour + "h";
  if (props.forecast.hour === "00") hour = "Midnight";

  return (
    <div className="tile">
      <div className="datetime">
        <p>{props.forecast.month} {props.forecast.day}</p>
        <p>{hour}</p>
      </div>
      <div className="weatherconditions">
        <img src={imgURL} />
        <p>{props.forecast.clearance}</p>
      </div>
      <div className="tempbox">
        <p>{Math.round(props.forecast.maxTemp)}°</p>
      </div>
      <div className="humidity">
        <p>Humidity: {Math.round(props.forecast.maxTemp)}%</p>
      </div>
    </div>
  )
}

export default MeteoTile
