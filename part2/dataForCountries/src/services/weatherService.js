import axios from 'axios'
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'

const getByCity = ({cityName}) => {
    console.log("city name passed in is",cityName)
    const request = axios.get(baseUrl.concat(`q=${cityName}&units=metric`).concat(`&appid=${import.meta.env.VITE_WEATHER_API_KEY}`))
    return request.then(response => response.data)
}

export default {getByCity}