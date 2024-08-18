import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox.js';
import WeatherButton from './component/WeatherButton.js';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 현재 위치 기반 상태
// 2. 도시에 따른 섭씨 화씨
// 3. 버튼 (1개 현재 위치 / 4개 다른 위치)
// 4. 도시 버튼 클릭 시 해당 도시 날씨
// 5. 현재 버튼 클릭 시 현재 도시 날씨
// 6. 로딩스피너 추가
// 7. 도시 버튼 클릭 시 버튼 색상 변경
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(null);
  const cities = ['seoul', 'new york', 'paris', 'tokyo'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38e9c1f8bd72252ac1ea91746bbae86b&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    // console.log("current data", data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38e9c1f8bd72252ac1ea91746bbae86b&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  useEffect(()=>{
    if(city === ''){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  },[city]);

  return (
    <div>
      {loading? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather}/>
          <WeatherButton cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} index={index} setIndex={setIndex}/>
        </div>
      )}
    </div>
  );
}

export default App;
