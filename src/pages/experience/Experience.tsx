import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router'
import json from "./experience.json";
import icon from 'bootstrap-icons/icons/briefcase-fill.svg';

interface IExperience{
  company: string,
  title: string,
  start: string,
  end: string,
  description: string
};

function Experience() {

  const experience: IExperience[] = json.experience;

  return (
    <Container className="px-4 py-5 my-3 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-4">Experience</h2>
        </Col>
       </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto text-body-secondary">
          <Accordion defaultActiveKey="0" className="mb-4">
            {
              experience.map((item, index) => {
                return (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.company}</Accordion.Header>
                    <Accordion.Body>
                      <p className="text-start"><u>{item.title} ({item.start} - {item.end})</u></p>
                      <p className="text-start">{item.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                )})
            }
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-primary btn-lg px-4 gap-3" to="/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Experience;
