import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import FootyService, { IGame } from './FootyService';

interface IGamesProps {
    year: number,
    round: number,
    team: number,
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

function Games({ year, round, team, setError }:IGamesProps ) {

	const [games, setGames] = useState<IGame[]>([]);

	useEffect(() => {

	  const getGames = async () => {

        let result: IGame[] | undefined;

        if (team > 0) {
            result = await new FootyService().getGamesByTeam(year, team);
        }
        else {
            result = await new FootyService().getGamesByRound(year, round);
        }

		if (result) {
			setGames(result);
			setError(false);
		} else {
			setGames([]);
			setError(true);
		}
	  };

	  getGames();

	}, [year, round, team, setError]);

	return (
        <Table bordered striped hover>
            <thead>
                { team > 0 && <th>Round</th> }
                <th>Home</th>
                <th>Away</th>
                <th>Score</th>
            </thead>
            <tbody>
                {games.map((game, index) => (
                    <tr key={index}>
                        { team > 0 && <td>{game.roundname}</td> }
                        <td>{game.hteam}</td>
                        <td>{game.ateam}</td>
                        <td>{(game.hscore + game.ascore) > 0 && game.hscore + " - " + game.ascore}</td>
                    </tr>
                ))}
            </tbody> 
        </Table>
	)
};

export type { IGamesProps }
export default Games;
