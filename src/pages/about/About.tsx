import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import json from "./about.json";
import icon from 'bootstrap-icons/icons/info-circle-fill.svg';

function About() {

  const about: string[] = json.about

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">About</h2>
        </Col>
       </Row>
       <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          {
            about.map((item, index) => {
              return (
                <p key={index} className="">{item}</p>
              )})
          }
        </Col>
      </Row>
    </Container>
  )
};

export default About;
