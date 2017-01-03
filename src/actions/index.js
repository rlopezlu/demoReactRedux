import axios from 'axios';

const API_KEY = '56436006fa6774f1436ebcccb8e09803';
//use backticks '`' to able able to use es6 string templating
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;
//';q=London,us&'

//exported because it is used by actions and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

//the fetchWeather actions takes in a city string
export function fetchWeather(city){
	//action creators always return an action object
	//actions always have a type
	const url = `${ROOT_URL}&q=${city},us`; 
	const request = axios.get(url);


	return{
		type: FETCH_WEATHER,
		payload: request
	};
}