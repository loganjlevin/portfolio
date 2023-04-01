import Typed from 'react-typed';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
  return (
    <Container className="home">
      <Row>
        <Col className="justify-content-center">
          {' '}
          <h1>Logan J Levin</h1>
        </Col>
      </Row>
      <Row>
        <Typed
          className="typed"
          strings={[
            'Full Stack Developer',
            'Problem Solver',
            'Lifelong Learner',
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Row>
    </Container>
  );
};

export default Home;
