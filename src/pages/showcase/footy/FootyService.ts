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

interface IStandingsResponse{
  standings: IStanding[];
}

interface IFootyService {
  getStandings(): Promise<IStanding[] | undefined>;
}

class FootyService implements IFootyService {

  private BASE_URL = "https://api.squiggle.com.au/";

  // private static standings: IStanding[] | undefined = undefined;

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
}

export type { IStanding };
export default FootyService;
