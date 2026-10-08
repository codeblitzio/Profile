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
    <Container className="px-4 py-4 my-3 text-center">
      <Row>
        <Col>
          <Image src={icon} alt="" width="50" height="50"/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <h2 className="text-primary mb-4">Contact</h2>
        </Col>
       </Row>
       <Row className="mb-4">
        <Col>
          <p className="text-body-secondary">Connect with me</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs={12} sm={10} md={8} lg={6}>
          <div className="list-group list-group-flush text-start">
            <a className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3" href={`mailto:${email}`}>
              <Image src={icon} alt="" width="18" height="18"/>
              <span>{email}</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3" href={socialLinks.linkedInUrl} target="_blank" rel="noreferrer noopener">
              <Image src={linkedInIcon} alt="" width="18" height="18"/>
              <span>LinkedIn</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3" href={socialLinks.twitterUrl} target="_blank" rel="noreferrer noopener">
              <Image src={twitterIcon} alt="" width="18" height="18"/>
              <span>X (Twitter)</span>
            </a>
          </div>
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

export default Contact;
