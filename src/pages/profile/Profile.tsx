import { FC } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import json from "./content.json";
import icon from 'bootstrap-icons/icons/person-lines-fill.svg';

const Profile: FC = () => {

  const summary: string[] = json.summary;

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">Profile</h2>
        </Col>
       </Row>
       <Row>
        <Col>
          <h4 className="text-secondary mb-4">Summary</h4>
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
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/profile/education">Education</Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/profile/skills">Skills</Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/profile/history">History</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Profile;
