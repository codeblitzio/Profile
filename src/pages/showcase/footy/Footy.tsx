import { FC, useState } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router';
import Ladder from './Ladder';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/trophy-fill.svg';

interface IRound {
	id: number,
	name: string
}

interface ITeam {
	id: number,
	name: string
}

interface IContent {
	description: string[],
	views: string[],
	rounds: IRound[],
	teams: ITeam[],
	defaultView: string,
	defaultRound: number,
	defaultTeam:  number,
	year: number
}

const Footy: FC = () => {

	const content: IContent = json;

	const [view, setView] = useState<string>(content.defaultView);

	const [round, setRound] = useState<number>(content.defaultRound);

	const [team, setTeam] = useState<number>(content.defaultTeam);

	const [error, setError] = useState<boolean>(false);

	const onChangeView = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setError(false);
		setView(event.target.value);
	};

	const onChangeRound = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setError(false);
		setRound(+event.target.value);
	};

	const onChangeTeam = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setError(false);
		setTeam(+event.target.value);
	};

	return (
		<Container className="px-4 py-5 my-5 text-center">
			<Row>
				<Col>
					<Image className="mb-4" src={icon} alt="" width="50" height="50" />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-success mb-4">Footy</h2>
				</Col>
			</Row>
			<Row>
				<Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto">
					{
						content.description.map((item, index) => {
							return (
								<p key={index} className="">{item}</p>
							)
						})
					}
				</Col>
			</Row>
			<Row>
				<Col lg={4} md={6} sm={8} xs={8} className="mx-auto mb-5">
					<Form className="text-start">
						<Form.Group className="mb-3" controlId="form.View">
							<Form.Label>Select view</Form.Label>	
							<Form.Select defaultValue={content.defaultView} onChange={onChangeView}>
								{
									content.views.map((item, index) => {
										return <option key={index} value={item}>{item}</option>
									})
								}
							</Form.Select>
						</Form.Group>
						{
							view=="Round" &&
							<Form.Group className="mb-3" controlId="form.Round"> 
								<Form.Label>Select round</Form.Label>
								<Form.Select defaultValue={content.defaultRound} onChange={onChangeRound}>
								{
									content.rounds.map((item, index) => {
										return <option key={index} value={item.id}>{item.name}</option>
									})
								}
								</Form.Select>
							</Form.Group>
						}
						{
							view=="Team" &&
							<Form.Group className="mb-3" controlId="form.Team">
								<Form.Label>Select team</Form.Label>
								<Form.Select defaultValue={content.defaultTeam} onChange={onChangeTeam}>
								{
									content.teams.map((item, index) => {
										return <option key={index} value={item.id}>{item.name}</option>
									})
								}
								</Form.Select>
							</Form.Group>
						}
						<Alert className="mt-4" show={error} variant="danger">An error occurred</Alert>					
					</Form>
				</Col>
			</Row>
			{ view=="Ladder" && !error &&
				<Row>
					<Col lg={8} md={8} sm={10} xs={10} className="mb-4 mx-auto">
						<Ladder setError={setError} />
					</Col>
				</Row>
			}
            <Row>
                <Col>
                    <Link className="btn btn-outline-secondary btn-lg px-4" to="/showcase">Back</Link>
                </Col>
            </Row>
		</Container>
	)
};

export default Footy;
