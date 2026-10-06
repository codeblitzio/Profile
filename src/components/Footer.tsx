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
    <footer className="bg-body-tertiary border-top">
      <Container>
        <Row className="justify-content-center justify-content-sm-between align-items-center gap-3 py-4">
          <Col xs="auto">
            <Button href="/" variant="link" className="lh-1 text-body-secondary text-decoration-none p-0">&copy; {new Date().getFullYear()} Codeblitz</Button>
          </Col>
          <Col xs="auto">
            <nav aria-label="Social links" className="d-flex gap-2">
              <a className="btn btn-outline-primary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image width="20" height="20" src={linkedIn} alt="" />
              </a>
              <a className="btn btn-outline-primary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
                <Image width="20" height="20" src={twitterX} alt="" />
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>  
  );
};

export default Footer;
