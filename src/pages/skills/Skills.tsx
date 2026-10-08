import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';
import json from "./skills.json";
import icon from 'bootstrap-icons/icons/tools.svg';
import './Skills.css';

function Skills() {

  const skills: string[] = json.skills

  return (
    <Container className="px-4 py-4 my-3 text-center">
      <Row>
        <Col>
          <Image src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-4">Skills</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto text-body-secondary">
          <ListGroup className="skills-list mb-4">
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
          <Link className="btn btn-outline-primary btn-md px-4 gap-3" to="/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Skills;
