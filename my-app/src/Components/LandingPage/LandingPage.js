import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import image from '../../assets/kids-drawing.png';

const LandingPage = () => {
    return (
        <Container>
            <header className="main-header">
                <div className="header-text-container">
                    <h1 className="main-title">Home Schooling</h1>
                    <p className="main-text">
                        Learn how we keep your children engaged in learning and entertained during quarantine
            </p>
                </div>
                <Button className="class-button">
                    Join Class
          </Button>
                <img className="main-image" alt="empty" src={image} />
            </header>
        </Container>
    );
}

export default LandingPage;
