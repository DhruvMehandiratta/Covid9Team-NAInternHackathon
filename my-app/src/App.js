import React from 'react';
import './App.css';
import LearnMore from './Components/LearnMore/LearnMore';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import EventSignUp from './Components/SignUp/EventSignUp'
import LoginPage from './Components/LoginPage/LoginPage'
import StudentsSignUp from './Components/SignUp/StudentsSignUp'
import TeacherSignUp from './Components/SignUp/TeacherSignUp'



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
                  Sign Up
                </Nav.Link>
                <Nav.Link href="/learn">
                  Learn More
                </Nav.Link>
                <Nav.Link href="/loginpage">
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
          <Route path="/loginpage">
            <LoginPage/>
          </Route>
          <Route path="/studentsSignUp">
            <StudentsSignUp/>
          </Route>
          <Route path="/teachersSignUp">
            <TeacherSignUp/>
          </Route>
          <Route path="/eventsSignUp">
            <EventSignUp/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
