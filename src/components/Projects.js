import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myflix from '../img/myflix.png';
import myflixAngular from '../img/myflixAngular.png';
import pokedex from '../img/PokedexApp.png';
import meet from '../img/meetapp.png';
import './Projects.scss';
import movieApi from '../img/movieApi.png';
import chatApp from '../img/chatApp.png';

const Projects = () => {
  return (
    <Container className="projects">
      <Row>
        <Col className="justify-content-center">
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} xl={3} className="g-4">
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={myflix} />
            <Card.Body>
              <Card.Title>MyFlix - React</Card.Title>
              <Card.Text>
                MERN stack web application where users can create a profile,
                search a list of movies, view a movie's details, and add movies
                to their favorites.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/myFlix-client'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
              <Link
                to={'https://my-flix-logan.netlify.app/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Demo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={myflixAngular} />
            <Card.Body>
              <Card.Title>MyFlix - Angular</Card.Title>
              <Card.Text>
                MEAN stack web application where users can create a profile,
                search a list of movies, view a movie's details, and add movies
                to their favorites.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/myFlix-Angular'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
              <Link
                to={'https://loganjlevin.github.io/myFlix-Angular'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Demo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={meet} />
            <Card.Body>
              <Card.Title>Meet App</Card.Title>
              <Card.Text>
                Progressive web application that displays data from the Google
                Calendar API. Users see charts based on event location and
                category.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/meet'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
              <Link
                to={'https://loganjlevin.github.io/meet/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Demo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={chatApp} />
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                A React Native mobile application that allows users to chat,
                share pictures, and send their locations.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/chat-app'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={movieApi} />
            <Card.Body>
              <Card.Title>Movie API</Card.Title>
              <Card.Text>
                A RESTful API backend for the MyFlix client using Node.js,
                Express, and MongoDB.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/movie_api'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src={pokedex} />
            <Card.Body>
              <Card.Title>Pokedex</Card.Title>
              <Card.Text>
                Web application that displays data from the{' '}
                <Link
                  className="link"
                  to={'https://pokeapi.co/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PokeAPI
                </Link>{' '}
                based on user's search. Made utilizing HTML, CSS, Javascript,
                jQuery, and Bootstrap.
              </Card.Text>
              <Link
                to={'https://github.com/loganjlevin/pokedex'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Code
                </Button>
              </Link>
              <Link
                to={'https://loganjlevin.github.io/pokedex/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3" variant="primary">
                  Demo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div style={{ height: '80px' }}></div>
    </Container>
  );
};

export default Projects;
