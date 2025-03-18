import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import ContentService  from '../../services/content/ContentService';
import jpeg from '../../assets/profile.jpeg';

const Home: FC = () => {

  // useState and useEffect hooks may be overkill here 
  // in a real-world scenario content would be pulled from an external source 

  const [intro, setIntro] = useState<string[]>([]);

  useEffect(() => {
    return setIntro(new ContentService().getIntro());
  }, []);

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto">
          <Image fluid className="mb-4 border shadow" src={jpeg} alt=""/>
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
            intro.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              )})
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/profile">Profile</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;
