import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router'
import ContentService, { IHistory } from '../../services/content/ContentService';
import icon from 'bootstrap-icons/icons/briefcase-fill.svg';

const History: FC = () => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    return setHistory(new ContentService().getHistory());
  }, []);

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
                      <p><u>{item.title} ({item.start} - {item.end})</u></p>
                      <p>{item.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                )})
            }
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-outline-secondary btn-lg px-4 gap-3" to="/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default History;
