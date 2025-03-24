import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router';
import WeatherService, { IWeather } from './WeatherService';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/cloud-sun-fill.svg';

interface ILocation {
	key: string;
	name: string
}

interface IContent {
	description: string[],
	locations: ILocation[],
	defaultLocation: string
}

const Weather: FC = () => {

	const content: IContent = json;

	const [location, setLocation] = useState<string>(content.defaultLocation);

	const [weather, setWeather] = useState<IWeather>();

	const [error, setError] = useState<boolean>(false);

	useEffect(() => {

	  const getWeather = async () => {
		const result = await new WeatherService().getWeather(location);
		if (result) {
			setWeather(result);
			setError(false);
		} else {
			setWeather(undefined);
			setError(true);
		}
	  };

	  getWeather();
	  
	}, [location]);

	const onChangeLocation = async (event: React.ChangeEvent<HTMLSelectElement>) => {
		setError(false);
		setWeather(undefined);
		setLocation(event.target.value);
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
					<h2 className="text-success mb-4">Weather</h2>
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
						<Form.Group className="mb-3" controlId="form.Select">
							<Form.Label>Select location</Form.Label>	
							<Form.Select defaultValue={content.defaultLocation} onChange={onChangeLocation}>
								{
									content.locations.map((item, index) => {
										return <option key={index} value={item.key}>{item.name}</option>
									})
								}
							</Form.Select>
							<Alert className="mt-4" show={error} variant="danger">An error occurred</Alert>
						</Form.Group>
						<Form.Group controlId="form.Conditions" className="mb-3">
							<Form.Label>Conditions</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.conditions}/>
						</Form.Group>
						<Form.Group controlId="form.Temperature" className="mb-3">
							<Form.Label>Temperature</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.temp.toFixed(1)}/>
						</Form.Group>
						<Form.Group controlId="form.Humidity" className="mb-3">
							<Form.Label>Humidity</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.humidity.toString()}/>
						</Form.Group>
						<Form.Group controlId="form.Wind" >
							<Form.Label>Wind</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.wind.toFixed(1)}/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Row>
        <Col>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/showcase">Back</Link>
        </Col>
      </Row>
		</Container>
	)
};

export default Weather;
