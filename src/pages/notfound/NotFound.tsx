import { FC } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import icon from 'bootstrap-icons/icons/x-octagon-fill.svg';

const NotFound: FC = () => {

  const text = "The requested resource could not be found.";

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-success mb-4">404 - Not Found</h2>
        </Col>
       </Row>
       <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  )
};

export default NotFound;
