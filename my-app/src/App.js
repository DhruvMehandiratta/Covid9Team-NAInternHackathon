import React from 'react';
import './App.css';
import LearnMore from './Components/LearnMore/LearnMore';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Container>
          <Navbar bg="transparent" expant="lg">
            <Navbar.Brand href="/home">Home School</Navbar.Brand>
            <Navbar.Toggle aria-controls="home-school-navbar"></Navbar.Toggle>
            <Navbar.Collapse className="home-navbar" id="home-school-navbar">
              <Nav>
                <Nav.Link href="/home">
                  Home
                </Nav.Link>
                  <NavDropdown title="Sign Up" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/teacher/signup">Teacher</NavDropdown.Item>
                    <NavDropdown.Item href="/parent/signup">Parent</NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link href="/learn">
                  Learn More
                </Nav.Link>
                <Nav.Link href="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/learn">
            <LearnMore />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
