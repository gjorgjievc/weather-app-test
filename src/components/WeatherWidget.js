import React from 'react'

export const WeatherWidget = ({day, temp, windDirection, windSpeed, type, tempUnit, windSpeedUnit}) => {
    
    return (
        <div className="widget">
            <div>
                <h2>{day}</h2>
                <p>{type}</p>
            </div>
            <div>
            <h2>{temp} °{tempUnit}</h2>
            <p>wind: {windSpeed}{windSpeedUnit} | {windDirection}</p>
            </div>
        </div>
    )
}
