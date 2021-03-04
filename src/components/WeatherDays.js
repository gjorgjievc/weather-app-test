import React, {useState} from 'react';
import { WeatherWidget } from './WeatherWidget';
import { Card } from './Card';

export const WeatherDays = ({days, windSpeedUnit, tempUnit}) => {
    const [ widgetId, setWidgetId ] = useState(0);
    
    //find which day is clicked
    const day = days.find(selected => selected.id === widgetId)
    return (
        <div>
            <WeatherWidget 
                    temp={day.temp}
                    day={day.day}
                    windDirection={day.windDirection}
                    windSpeed={day.windSpeed}
                    type={day.type}
                    tempUnit={tempUnit}
                    windSpeedUnit={windSpeedUnit}
            />
    
            <div className="forecast">
            {
                days.map(day => {
                    return <Card key={day.id}
                                day={day.day} 
                                temp={day.temp}
                                tempUnit={tempUnit}
                                onClick={() => setWidgetId(day.id)}
                            />
                })
                
            }
            </div>
        </div>
    )
}
// windDirection={day.windDirection}
//                         windSpeed={day.windSpeed}
//                         type={day.type}
//                         tempUnit={tempUnit}
//                         windSpeedUnit={windSpeedUnit}