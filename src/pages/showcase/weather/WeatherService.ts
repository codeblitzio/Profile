import axios from 'axios';

interface IOpenWeatherResponse {
  name: string;

  main: {
    temp: number;
    humidity: number;
  };

  weather: {
    main: string;
    description: string;
  }[];

  wind: {
    speed: number;
    deg: number;
  }
}

interface IWeather {
  location: string;
  conditions: string;
  temp: number;
  humidity: number;
  wind: number;
}

interface IWeatherService {
  getWeather(location: string): Promise<IWeather>;
}

class WeatherService implements IWeatherService {

  getWeather = async (location: string): Promise<IWeather> => {

    location = `${location},au`;

    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    const response = await axios.get<IOpenWeatherResponse>(url);

    return {
      location: response.data.name,
      conditions: response.data.weather[0].main,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    };
  };

}

export type { IWeatherService, IWeather };
export default WeatherService;
