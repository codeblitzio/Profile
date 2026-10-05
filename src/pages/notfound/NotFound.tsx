import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';
import Image from 'react-bootstrap/Image';
import icon from 'bootstrap-icons/icons/x-octagon-fill.svg';

function NotFound() {

  const text = "The requested resource could not be found.";

  return (
    <Container className="px-4 py-5 my-3 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-4">Not Found</h2>
        </Col>
       </Row>
       <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto text-body-secondary mb-4">
          <p>{text}</p>
        </Col>
      </Row>
            <Row>
        <Col>
          <Link className="btn btn-outline-primary btn-md px-4 gap-3" to="/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default NotFound;
