import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router'
import json from "./history.json";
import icon from 'bootstrap-icons/icons/briefcase-fill.svg';

interface IHistory{
  company: string,
  title: string,
  start: string,
  end: string,
  description: string
};

function History() {

  const history: IHistory[] = json.history;

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">Career History</h2>
        </Col>
       </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <Accordion className="mb-4">
            {
              history.map((item, index) => {
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
          <Link className="btn btn-outline-secondary btn-lg px-4 gap-3" to="/profile">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default History;
