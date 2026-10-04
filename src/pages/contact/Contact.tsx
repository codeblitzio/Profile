import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';
import socialLinks from "../../components/footer.json";
import linkedInIcon from 'bootstrap-icons/icons/linkedin.svg';
import twitterIcon from 'bootstrap-icons/icons/twitter-x.svg';
import icon from 'bootstrap-icons/icons/envelope-fill.svg';

function Contact() {
  const email = 'blair@codeblitz.io';

  return (
    <Container className="px-4 py-5 my-3 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-2">Contact</h2>
        </Col>
       </Row>
       <Row className="mb-4">
        <Col>
          <p className="text-body-secondary">Connect with me</p>
        </Col>
      </Row>
      <Row className="justify-content-center g-3 mb-4">
        <Col xs={12} sm="auto">
          <a className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2 w-100" href={`mailto:${email}`}>
            <Image src={icon} alt="" width="18" height="18"/>
            {email}
          </a>
        </Col>
        <Col xs={12} sm="auto">
          <a className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2 w-100" href={socialLinks.linkedInUrl} target="_blank" rel="noreferrer noopener">
            <Image src={linkedInIcon} alt="" width="18" height="18"/>
            LinkedIn
          </a>
        </Col>
        <Col xs={12} sm="auto">
          <a className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2 w-100" href={socialLinks.twitterUrl} target="_blank" rel="noreferrer noopener">
            <Image src={twitterIcon} alt="" width="18" height="18"/>
            X (Twitter)
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-primary btn-lg px-4 gap-3" to="/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;
