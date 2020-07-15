import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Learn from './Learn';
import image from './pngfuel.com.png';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Link } from 'carbon-components-react'

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <header className="main-header">
          <Link className="topLinks">Sign In</Link>
          <Link className="topLinks">Learn More</Link>
        </header>
        <h1 className="main-title">Home Schooling</h1>
        <p className="main-text">Learn how we keep your children engaged in
        learning and entertained during quarantine
      </p>
        <Button className="class-button" kind='primary'>Join Class</Button>
        <img className="main-image" alt="empty" src={image} />
      </div>
    </div>
  );
}

export default App;
