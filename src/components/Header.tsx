import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

function Header() {

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="md" className="py-2 shadow-sm">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-semibold">Codeblitz</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item as={NavLink} to="/education">Education</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/experience">Experience</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> 
        </Container>   
      </Navbar>
    </header>    
  )
};

export default Header;
