import { FC } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/tools.svg';

const Skills: FC = () => {

  const skills: string[] = json.skills

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">Skills</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <ListGroup className="mb-4">
            {
              skills.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>{item}</ListGroup.Item>
                )})
            }
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-outline-secondary btn-lg px-4 gap-3" to="/profile">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Skills;
