import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';
import ContentService, { IEducation } from '../../services/content/ContentService';
import icon from 'bootstrap-icons/icons/mortarboard-fill.svg';

const Education: FC = () => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [education, setEducation] = useState<IEducation>({ qualifications: [], certifications: [] });

  useEffect(() => {
    return setEducation(new ContentService().getEducation());
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
          <h2 className="text-success mb-4">Education</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-secondary mb-4">Qualifications</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <ListGroup className="mb-4">
            {
              education.qualifications.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>{item}</ListGroup.Item>
                )})
            }
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-secondary mb-4">Certifications</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">      
          <ListGroup className="mb-4">
            {
              education.certifications.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>{item}</ListGroup.Item>
                )})
            }
          </ListGroup>
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

export default Education;
