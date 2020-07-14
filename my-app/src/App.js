import React from 'react';
// import logo from './logo.svg';
import './App.css';
import image from './pngfuel.com.png';
import { Button, Link } from 'carbon-components-react'

function App() {
  return (
    <div className="App">
      <nav className="main-header">
          <Link className="topLinks">Sign In</Link>
          <Link className="topLinks">Learn More</Link>
      </nav>
      <h1 className="main-title">Home Schooling</h1>
      <p className="main-text">Learn how we keep your children engaged in 
        learning and entertained during quarantine
      </p>
      <Button className="class-button" kind='primary'>Join Class</Button>
      <img className="main-image" alt="empty" src={image} />
    </div>
  );
}

export default App;
