import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import json from "./home.json";
import jpeg from '../../assets/profile.jpeg';

function Home() {

  const summary: string[] = json.summary;

  return (
    <Container className="px-4 py-5 my-3 text-center">
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto">
          <Image fluid className="mb-4 border border-3 border-primary-subtle rounded-3 shadow-lg" src={jpeg} alt=""/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-4">Blair Morris</h2>
        </Col>
       </Row>
      <Row>
        <Col>
          <h4 className="text-body-secondary mb-4">Summary</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto text-body-secondary">
          {
            summary.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              )})
          }
        </Col>
      </Row>
      <Row className="g-2 justify-content-center">
        <Col xs="auto">
          <Link className="btn btn-primary btn-lg px-4" to="/education">Education</Link>
        </Col>
        <Col xs="auto">
          <Link className="btn btn-primary btn-lg px-4" to="/skills">Skills</Link>
        </Col>
        <Col xs="auto">
          <Link className="btn btn-primary btn-lg px-4" to="/experience">Experience</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;
