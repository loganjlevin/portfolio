import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import twitter_icon from '../img/twitter_icon.png';
import github_icon from '../img/github_icon.png';
import linkedin_icon from '../img/linkedin_icon.png';

const Footer = () => {
  return (
    <Navbar bg="primary" fixed="bottom">
      <Container>
        <Nav className="m-auto">
          <Nav.Link
            href="https://github.com/loganjlevin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer-icon"
              alt=""
              src={github_icon}
              width={40}
            />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/loganjlevin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer-icon"
              alt=""
              src={linkedin_icon}
              width={40}
            />
          </Nav.Link>
          <Nav.Link
            href="https://twitter.com/loganjlevin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer-icon"
              alt=""
              src={twitter_icon}
              width={40}
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
