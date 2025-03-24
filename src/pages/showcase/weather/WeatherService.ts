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
  getWeather(location: string): Promise<IWeather | undefined>;
}

class WeatherService implements IWeatherService {

  private BASE_URL = "https://api.openweathermap.org/";

  getWeather = async (location: string): Promise<IWeather | undefined> => {

    try {
      const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

      const apiClient = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const qry = `data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      const response = await apiClient.get<IOpenWeatherResponse>(qry);

      return {
        location: response.data.name,
        conditions: response.data.weather[0].main,
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed
      };

    } 
    catch (error) {
      console.error(error);
      return undefined;
    };
  }
}

export type { IWeatherService, IWeather };
export default WeatherService;
