import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import lightning from 'bootstrap-icons/icons/lightning-charge-fill.svg';
import { IContentService } from '../../services/content/ContentService';
import { FC , useState, useEffect } from 'react';

interface IAboutProps {
  contentService: IContentService
} 

const About: FC<IAboutProps> = (props) => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [about, setAbout] = useState<string[]>([]);

  useEffect(() => {
    return setAbout(props.contentService.getAbout());
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
          <h2 className="text-success mb-4">About</h2>
        </Col>
       </Row>
       <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mb-4 mx-auto">
          {
            about.map((item, index) => {
              return (
                <p key={index} className="">{item}</p>
              )})
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-secondary" className="btn-lg px-4 gap-3" href="/">Back</Button>
        </Col>
      </Row>
    </Container>
  )
};

export type { IAboutProps };
export default About ;
