const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:nth-child(2)");
const loading = document.querySelector("#weather span:nth-child(3)");

const API_KEY = "48d0957f7065cff99160dfdca30abc14";

const getWeather = ({coords}) => {
  const lat = coords.latitude;
  const lon = coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(res => res.json()).then(data => {
    loading.classList.add("hidden");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°`;
  });
};

const getWeatherErr = () => {
  alert("위치 정보 X")
};

navigator.geolocation.getCurrentPosition(getWeather, getWeatherErr);
