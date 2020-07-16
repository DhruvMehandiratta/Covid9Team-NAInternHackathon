import React from 'react';
import './App.css';
import LearnMore from './Components/LearnMore/LearnMore';
import Calendar from './Components/Calendar/Calendar'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
import RecordedVids from './Components/RecordedVids/RecordedVids';
import Games from './Components/Games/Games';
import LiveStream from './Components/LiveStream/LiveStream';
import Playdates from './Components/Playdates/Playdates';
import logo from '../src/assets/logo.png';



 const App = () => {
   return (
    <Router>
      <div className="main-container">
        <Container>
          <Navbar bg="transparent" expant="lg">
            <img className="logo" alt="empty" src={logo} />
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
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/parent/signup">
            <StudentsSignUp/>
          </Route>
          <Route path="/teacher/signup">
            <TeacherSignUp/>
          </Route>
          <Route path="/events/signup">
            <EventSignUp/>
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/videos">
            <RecordedVids />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/stream">
            <LiveStream />
          </Route>
          <Route path="/playdates">
            <Playdates />
          </Route>
        </Switch>

        <div class="home-page-circle-1"></div>
        <div class="home-page-circle-2"></div>
        <div class="home-page-circle-3"></div>
      </div>
    </Router>
  );
}

export default App;
