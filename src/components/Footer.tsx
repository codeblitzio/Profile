import Container from 'react-bootstrap/container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import json from "./footer.json";
import linkedIn from 'bootstrap-icons/icons/linkedin.svg';
import twitterX from 'bootstrap-icons/icons/twitter-x.svg';

function Footer() {

  const linkedInUrl = json.linkedInUrl;
  const twitterUrl = json.twitterUrl;

  return (
    <footer>
      <Container>
        <Row className="justify-content-between align-items-center py-3 my-3 border-top border-2">
          <Col className="align-items-center">
            <Button href="/" variant="link" className="lh-1">&copy; {new Date().getFullYear()} CodeBlitz</Button>
          </Col>
          <Col className="nav col-md-4 justify-content-end align-items-center list-unstyled">
            <li className="ms-3"><a href={linkedInUrl} target="_blank"><Image className="bi" width="24" height="24" src={linkedIn} alt="LinkedIn" /></a></li>
            <li className="ms-3"><a href={twitterUrl} target="_blank"><Image className="bi" width="24" height="24" src={twitterX} alt="X"/></a></li>
          </Col>
        </Row>
      </Container>
    </footer>  
  );
};

export default Footer;
