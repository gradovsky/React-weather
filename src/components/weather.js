import React from "react";

const Weather = props => (
    <div>
        {props.city &&
        <div className="infoWeath">
            <p>Місце знаходження: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Атмосферний тиск: {props.pressure}</p>
            <p>Захід сонця: {props.sunset}</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>)

export default Weather;