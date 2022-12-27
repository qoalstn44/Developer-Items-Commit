import { useState } from 'react';
import styled from 'styled-components';
import clear from '../img/weather-img/clear.png';
import cloud from '../img/weather-img/cloud.png';
import rain from '../img/weather-img/rain.png';
import snow from '../img/weather-img/snow.png';
import storm from '../img/weather-img/storm.png';

function Weather() {
  const API_KEY = '358666cd643baa4035d9fdde8ff433bf';

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState('');

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.name;
        const weatherName = data.weather[0].main;
        const temp = data.main.temp;
        setCity(cityName);
        setWeather(weatherName);
        setTemp(temp);
      });
  }
  // console.log(city);
  // console.log(weather);
  // console.log(temp);

  function onGeoError() {
    alert('날씨정보를 불러올 수 없습니다.');
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  return (
    <Container>
      <div>
        {weather.toLowerCase().includes('clear') ? (
          <StWeatherImg src={clear} alt="weatherImg" />
        ) : weather.toLowerCase().includes('clouds') ? (
          <StWeatherImg src={cloud} alt="weatherImg" />
        ) : weather.toLowerCase().includes('rain') ? (
          <StWeatherImg src={rain} alt="weatherImg" />
        ) : weather.toLowerCase().includes('snow') ? (
          <StWeatherImg src={snow} alt="weatherImg" />
        ) : weather.toLowerCase().includes('thunderstorm') ? (
          <StWeatherImg src={storm} alt="weatherImg" />
        ) : weather.toLowerCase().includes('mist') ? (
          <StWeatherImg src={clear} alt="weatherImg" />
        ) : (
          weather
        )}
      </div>
      <div>{city}</div>
      <div>{temp} °C</div>
    </Container>
  );
}
export default Weather;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StWeatherImg = styled.img`
  width: 30px;
  height: 30px;
`;
