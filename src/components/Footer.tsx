import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router'
import { FC, useState, useEffect } from 'react';
import ContentService, { ISocials } from '../services/content/ContentService';
import lightning from 'bootstrap-icons/icons/lightning-charge-fill.svg';
import linkedIn from 'bootstrap-icons/icons/linkedin.svg';
import twitterX from 'bootstrap-icons/icons/twitter-x.svg';

const Footer: FC = () => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [socials, setSocials] = useState<ISocials>({ linkedInUrl: '', twitterUrl: '' });

  useEffect(() => {
    return setSocials(new ContentService().getSocials());
  }, []);

  return (
    <footer>
      <Container>
        <Row className="justify-content-between align-items-center py-3 my-4 border-top">
          <Col className="align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <Image className="bi" width="24" height="24" src={lightning} alt=""/>
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 CodeBlitz</span>
          </Col>
          <Col className="nav col-md-4 justify-content-end list-unstyled">
            <li className="ms-3"><a className="text-body-secondary" href={socials.linkedInUrl} target="_blank"><Image className="bi" width="24" height="24" src={linkedIn} alt="LinkedIn" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href={socials.twitterUrl} target="_blank"><Image className="bi" width="24" height="24" src={twitterX} alt="X"/></a></li>
          </Col>
        </Row>
      </Container>
    </footer>  
  );
};

export default Footer;
