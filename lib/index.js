import { fetchWeather } from './weather';

// Elements
const form = document.querySelector('.form');
const cityInput = document.getElementById('city-input');

// Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchWeather(cityInput.value);
});
