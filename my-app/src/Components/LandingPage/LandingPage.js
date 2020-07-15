import React from 'react';
import './LandingPage.css';
import { Container, Button } from 'react-bootstrap';
import image from '../../assets/kids-drawing.png';

const LandingPage = () => {
    return (
        <Container>
            <div className="main-page">
                <div className="header-text-container">
                    <h1 className="main-title">Is your child learning during quarantine?</h1>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p className="main-text">
                        Learn how we keep your children engaged and entertained at home
                    </p>
                </div>
                <Button className="class-button">
                    Join Class
          </Button>
                <img className="main-image" alt="empty" src={image} />
            </div>
        </Container>
    );
}

export default LandingPage;
