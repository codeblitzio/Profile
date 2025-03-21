import { FC } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/film.svg';

interface IShowcase {
	title: string,
	description: string,
	link: string
};

interface IContent {
  showcases: IShowcase[]
}

const Showcase: FC = () => {

  const content: IContent = json;
  const showcases: IShowcase[] = content.showcases;

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">Showcase</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <Accordion defaultActiveKey="0" className="mb-4">
            {
              showcases.map((item, index) => {
                return (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body className="text-start">
                      <p>{item.description}</p>
                      <p><Link className="text-primary" to={item.link}>Click here</Link></p>
                    </Accordion.Body>
                  </Accordion.Item>
                )})
            }
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
};

export default Showcase;
