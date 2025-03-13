import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import lightning from 'bootstrap-icons/icons/lightning-charge-fill.svg';
import { IContentService } from '../../services/content/ContentService';
import { FC, useState, useEffect } from 'react';

interface ISkillsProps {
  contentService: IContentService
} 

const Skills: FC<ISkillsProps> = (props) => {

  // useState and useEffect hooks may be overkill here 
  // but in a real-world app we'de be pulling the content from an external source 

  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    return setSkills(props.contentService.getSkills());
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
          <h2 className="text-success mb-4">Skills</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} sm={10} xs={10} className="mx-auto">
          <ListGroup className="mb-4">
            {
              skills.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>{item}</ListGroup.Item>
                )})
            }
          </ListGroup>
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

export type { ISkillsProps };
export default Skills;
