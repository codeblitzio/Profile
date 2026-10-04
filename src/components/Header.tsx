import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function Header() {

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">CodeBlitz</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience">Experience</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> 
        </Container>   
      </Navbar>
    </header>    
  )
};

export default Header;
