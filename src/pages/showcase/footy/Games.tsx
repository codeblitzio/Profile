import { FC, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import FootyService, { IGame } from './FootyService';

interface IGamesProps {
    year: number,
    round: number,
    team: number,
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Games: FC<IGamesProps> = (props) => {

	const [games, setGames] = useState<IGame[]>([]);

	useEffect(() => {

	  const getGames = async () => {

        let result: IGame[] | undefined;

        if (props.team > 0) {
            result = await new FootyService().getGamesByTeam(props.year, props.team);
        }
        else {
            result = await new FootyService().getGamesByRound(props.year, props.round);
        }

		if (result) {
			setGames(result);
			props.setError(false);
		} else {
			setGames([]);
			props.setError(true);
		}
	  };

	  getGames();

	}, [props]);

	return (
        <Table bordered striped hover>
            <thead>
                { props.team > 0 && <th>Round</th> }
                <th>Home</th>
                <th>Away</th>
                <th>Score</th>
            </thead>
            <tbody>
                {games.map((game, index) => (
                    <tr key={index}>
                        { props.team > 0 && <td>{game.roundname}</td> }
                        <td>{game.hteam}</td>
                        <td>{game.ateam}</td>
                        <td>{game.complete == 100 && game.hscore + " - " + game.ascore}</td>
                    </tr>
                ))}
            </tbody> 
        </Table>
	)
};

export type { IGamesProps }
export default Games;
