import React from 'react';
import './LandingPage.css';
import { Container, Button } from 'react-bootstrap';
import image from '../../assets/kids-drawing.png';

const LandingPage = () => {
    return (
        <Container>
            <div className="main-page">
                <div className="header-text-container">
                    <h1 className="main-title">Home Schooling</h1>
                    <p className="main-text">
                        Learn how we keep your children engaged in learning and entertained during quarantine
                    </p>
                </div>
                <Button className="class-button" href="/learn">
                    Join Class
                </Button>
                <img className="main-image" alt="empty" src={image} />
            </div>
        </Container>
    );
}

export default LandingPage;
