import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox.js';
import WeatherButton from './component/WeatherButton.js';


// 1. 현재 위치 기반 상태
// 2. 도시에 따른 섭씨 화씨
// 3. 버튼 (1개 현재 위치 / 4개 다른 위치)
// 4. 도시 버튼 클릭 시 해당 도시 날씨
// 5. 현재 버튼 클릭 시 현재 도시 날씨
// 6. 로딩스피너 추가
function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38e9c1f8bd72252ac1ea91746bbae86b&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    console.log("current data", data);
    setWeather(data);
  }

  useEffect(()=>{
    getCurrentLocation();
  },[])

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton />
    </div>
    </div>
  );
}

export default App;
