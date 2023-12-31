import axios from 'axios';

export const weatherAxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const yandexAxiosInstance = axios.create({
  baseURL: 'https://api.weather.yandex.ru/v2',
  headers: {
    'X-Yandex-API-Key': 'd0390cd2-bd05-4855-85bf-3441a8345fff',
  },
});
