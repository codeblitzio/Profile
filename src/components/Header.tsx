import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import { FC } from 'react';

const Header: FC = () => {

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="md">
        <Container fluid>
          <Navbar.Brand href="/">CodeBlitz</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="/">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> 
        </Container>   
      </Navbar>
    </header>    
  )
}

export default Header
