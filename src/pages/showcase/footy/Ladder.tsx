import { FC, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import FootyService, { IStanding } from './FootyService';

interface ILadderProps {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Ladder: FC<ILadderProps> = (props) => {

	const [standings, setStandings] = useState<IStanding[]>([]);

	useEffect(() => {
	  const getStandings = async () => {
		const result = await new FootyService().getStandings();
		if (result) {
			setStandings(result);
			props.setError(false);
		} else {
			setStandings([]);
			props.setError(true);
		}
	  };
	  getStandings();
	}, []);

	return (
        <Table bordered striped hover>
            <thead>
                <th>Rank</th>
                <th>Team</th>
                <th>Played</th>
                <th>Points</th>
            </thead>
            <tbody>
                {standings.map((standing, index) => (
                    <tr key={index}>
                        <td>{standing.rank}</td>
                        <td>{standing.name}</td>
                        <td>{standing.played}</td>
                        <td>{standing.pts}</td>
                    </tr>
                ))}
            </tbody> 
        </Table>
	)
};

export type { ILadderProps }
export default Ladder;
