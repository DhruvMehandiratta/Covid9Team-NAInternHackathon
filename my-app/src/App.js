import React from 'react';
import './App.css';
import LearnMore from './Components/LearnMore/LearnMore';
// import Login from './Components/Login/Login'
import Calendar from './Components/Calendar/Calendar'
// import RecordedVids from '/Components/RecordedVids/RecordedVids'
// import Teacher from '/Components/SignUp/Teacher'
// import Parent from '/Components/SignUp/Parent'
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
            <Navbar.Brand href="/home">VirtualEdu</Navbar.Brand>
            <Navbar.Toggle aria-controls="home-school-navbar"></Navbar.Toggle>
            <Navbar.Collapse className="home-navbar" id="home-school-navbar">
              <Nav>
                <Nav.Link href="/home">
                  Home
                </Nav.Link>
                  
                <Nav.Link href="/learn">
                  Learn More
                </Nav.Link>
                <Nav.Link href="/login">
                  Login
                </Nav.Link>
                <NavDropdown title="Sign Up" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/teacher/signup">Teacher</NavDropdown.Item>
                    <NavDropdown.Item href="/parent/signup">Parent</NavDropdown.Item>
                  </NavDropdown>
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
          <Route path="/calendar">
            <Calendar />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/teacher/signup">
            <Teacher />
          </Route>
          <Route path="/parent/signup">
            <Parent />
          </Route> */}
        </Switch>

        <div class="home-page-circle-1"></div>
        <div class="home-page-circle-2"></div>
        <div class="home-page-circle-3"></div>
      </div>
    </Router>
  );
}

export default App;
