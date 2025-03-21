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
}

interface IWeather {
  location: string;
  conditions: string;
  temp: number;
  humidity: number;
}

interface IWeatherService {
  getWeather(location: string): Promise<IWeather>;
}

class WeatherService implements IWeatherService {

  apiKey = '8c370474b025a7d2f2265f83e4450a90';

  getWeather = async (location: string): Promise<IWeather> => {

    location = `${location},au`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.apiKey}`;

    const response = await axios.get<IOpenWeatherResponse>(url);

    return {
      location: response.data.name,
      conditions: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
    };
  };

}

export type { IWeatherService, IWeather };
export default WeatherService;
