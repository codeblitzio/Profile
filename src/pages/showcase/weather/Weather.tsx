import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import WeatherService, { IWeather } from './WeatherService';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/cloud-sun-fill.svg';

interface IContent {
	description: string[],
	locations: string[],
	defaultLocation: string
}

const Weather: FC = () => {

	const content: IContent = json;
	const description = content.description;
	const locations = content.locations;
	const defaultLocation = content.defaultLocation;

	const [location, setLocation] = useState<string>(defaultLocation);

	const [weather, setWeather] = useState<IWeather>();

	useEffect(() => {
	  const getWeather = async () => {
			setWeather(await new WeatherService().getWeather(location));
	  };
	  getWeather();
	}, [location]);

	const onChangeLocation = async (event: React.ChangeEvent<HTMLSelectElement>) => {
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
						description.map((item, index) => {
							return (
								<p key={index} className="">{item}</p>
							)
						})
					}
				</Col>
			</Row>
			<Row>
				<Col lg={4} md={6} sm={8} xs={8} className="mx-auto">
					<Form className="text-start">
						<Form.Group className="mb-3" controlId="form.Select">
							<Form.Label>Select location</Form.Label>	
							<Form.Select defaultValue={defaultLocation} onChange={onChangeLocation}>
								{
									locations.map((item, index) => {
										return <option key={index} value={item}>{item}</option>
									})
								}
							</Form.Select>
						</Form.Group>
						<Form.Group controlId="form.Location" className="mb-3">
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.location}/>
						</Form.Group>
						<Form.Group controlId="form.Conditions" className="mb-3">
							<Form.Label>Conditions</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.conditions}/>
						</Form.Group>
						<Form.Group controlId="form.Temperature" className="mb-3">
							<Form.Label>Temperature</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.temp.toString()}/>
						</Form.Group>
						<Form.Group controlId="form.Humidity" className="mb-5">
							<Form.Label>Humidity</Form.Label>
							<Form.Control type="text" readOnly disabled placeholder={weather?.humidity.toString()}/>
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
