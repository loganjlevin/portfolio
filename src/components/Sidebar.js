import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const location = useLocation();
  //col-md-12 d-md-block
  return (
    <Navbar bg="light" expand="lg">
      <Container className="sidebar">
        <Navbar.Brand href="#home">&nbsp;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/code">Code Samples</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar>
    //   <Container>
    //     <Navbar.Brand>TempText</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav activeKey={location.pathname} className=" sidebar bg-primary">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/projects">Projects</Nav.Link>
    //         <Nav.Link href="/code">Code Samples</Nav.Link>
    //         <Nav.Link href="/about">About Me</Nav.Link>
    //         <Nav.Link href="/contact">Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Sidebar;
