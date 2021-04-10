// Globals
const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5e5c28c8ab1743b1264648c170a4fd69';

// Elements
const cityElement = document.getElementById('city');
const descriptionElement = document.getElementById('description');
const temperature = document.getElementById('temperature');
const imgContainer = document.getElementById('img-container');

const updateCard = (data) => {
  cityElement.innerText = data.name;
  descriptionElement.innerText = data.weather[0].description;
  const img = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" />`;
  imgContainer.insertAdjacentHTML('afterbegin', img);
  temperature.innerText = `${data.main.temp}°C`;
}

const fetchWeather = (city) => {
  fetch(`${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(updateCard);
}

export { fetchWeather };
