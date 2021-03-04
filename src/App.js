import './App.css';
import { Header } from './components/Header';
import { WeatherDays } from './components/WeatherDays';

function App() {
  const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [
      { id: 0, day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10, type:'sunny' },
      { id: 1, day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
      { id: 2, day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
      { id: 3, day: 'Thu', temp: 16, windDirection: 'south-west', windSpeed: 23, type: 'rainy' },
      { id: 4, day: 'Fri', temp: 20, windDirection: 'south-east', windSpeed: 9, type: 'sunny' },
    ],
  }
  
  return (
    <>
      <Header />
      <hr />
      <WeatherDays days={weatherData.days} tempUnit={weatherData.tempUnit} windSpeedUnit={weatherData.windSpeedUnit}/>
    </>
  );
}

export default App;
