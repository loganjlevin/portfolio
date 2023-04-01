import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg">
      <Container className="sidebar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={location.pathname} className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/projects" as={Link}>
              Projects
            </Nav.Link>
            <Nav.Link to="/code" as={Link}>
              Code Samples
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About Me
            </Nav.Link>
            <Nav.Link to="/contact" as={Link}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
