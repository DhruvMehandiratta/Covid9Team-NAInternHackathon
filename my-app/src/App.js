import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Learn from './Learn';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
                <Nav.Link>
                  Sign in
                </Nav.Link>
                <Nav.Link>
                  Learn More
                </Nav.Link>
                <Nav.Link href="/login">
                  Log in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/login">
            <h2>
              Hello
            </h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
