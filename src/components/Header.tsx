import { FC } from 'react';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

const Header: FC = () => {

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">CodeBlitz</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto">
            <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> 
        </Container>   
      </Navbar>
    </header>    
  )
};

export default Header;
