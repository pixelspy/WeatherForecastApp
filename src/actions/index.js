import axios from 'axios';
// = AJAX request

const API_KEY = '5acc3b086b6e255e656b396cd9e30921';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//  a single variable with our action type avoids bugs

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);
// we use axios to do our requests

  // console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
