import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import ContentService  from '../../services/content/ContentService';
import icon from 'bootstrap-icons/icons/terminal-fill.svg';

const Profile: FC = () => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [summary, setSummary] = useState<string[]>([]);

  useEffect(() => {
    return setSummary(new ContentService().getSummary());
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
          <h2 className="text-success mb-4">Blair Morris</h2>
        </Col>
       </Row>
      <Row>
        <Col>
          <h4 className="text-secondary mb-4">Software Engineer</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto">
          {
            summary.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              )})
          }
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/education">Education</Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/skills">Skills</Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/history">History</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Profile;
