import axios from 'axios';

interface IStanding {
  rank: number;
  id: number;
  name: string;
  played: number;
  pts: number;
  percentage: number;
  wins: number;
  draws: number;
  losses: number;
}

interface IStandingsResponse {
  standings: IStanding[];
}

interface IGame {
  round: number;
  roundname: string;
  hteam: string;
  ateam: string;
  venue: string;
  date: string;
  hscore: number;
  ascore: number;
  complete: number;
}

interface IGamesResponse {
  games: IGame[];
}

interface IFootyService {
  getStandings(): Promise<IStanding[] | undefined>;
  getGamesByRound(year: number, round: number): Promise<IGame[] | undefined>;
  getGamesByTeam(year: number, team: number): Promise<IGame[] | undefined>;
}

class FootyService implements IFootyService {

  private BASE_URL = "https://api.squiggle.com.au/";

  getStandings = async (): Promise<IStanding[] | undefined> => {
    try {
      const apiClient = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const qry = "?q=standings";
      const response = await apiClient.get<IStandingsResponse>(qry);
      return response.data.standings;
    } 
    catch (error){
      console.error(error);
      return undefined;
    } 
  }

  getGamesByRound = async (year: number, round: number): Promise<IGame[] | undefined> => {
    try {
      const apiClient = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const qry = "?q=games&year=" + year + "&round=" + round;
      const response = await apiClient.get<IGamesResponse>(qry);
      return response.data.games;
    } 
    catch (error){
      console.error(error);
      return undefined;
    } 
  }

  getGamesByTeam = async (year: number, team: number): Promise<IGame[] | undefined> => {
    try {
      const apiClient = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const qry = "?q=games&year=" + year + "&team=" + team;
      const response = await apiClient.get<IGamesResponse>(qry);
      return response.data.games;
    } 
    catch (error){
      console.error(error);
      return undefined;
    } 
  }

}

export type { IStanding, IGame };
export default FootyService;
