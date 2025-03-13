import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import lightning from 'bootstrap-icons/icons/lightning-charge-fill.svg';
import { IContentService } from '../../services/content/ContentService';
import { FC, useState, useEffect } from 'react';

interface IProfileProps {
  contentService: IContentService
} 

const Profile: FC<IProfileProps> = (props) => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [summary, setSummary] = useState<string[]>([]);

  useEffect(() => {
    return setSummary(props.contentService.getSummary());
  }, [props.contentService]);

  return (
    <Container className="px-4 py-5 my-5 text-center">
      <Row>
        <Col>
          <Image className="mb-4" src={lightning} alt="" width="50" height="50"/>
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
            summary.map((item, index) => {
              return (
                <p key={index} className="">{item}</p>
              )})
          }
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Button variant="outline-secondary" size="lg" className="px-4" href="/education">Education</Button>
          <Button variant="outline-secondary" size="lg" className="px-4" href="/skills">Skills</Button>
          <Button variant="outline-secondary" size="lg" className="px-4" href="/history">History</Button>
        </Col>
      </Row>
    </Container>
  )
};

export type { IProfileProps };
export default Profile;
