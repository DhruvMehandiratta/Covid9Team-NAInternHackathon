import React from 'react';
import './Playdates.css';
import { Container, Button } from 'react-bootstrap';
import { TextInput, TextArea } from 'carbon-components-react'


class Playdates extends React.Component {
    render() {
        return (
            <Container className="datesContainer">
                <div className="dates-page">
                    <div className="dates-text-container">
                        <h1 className="dates-text">
                            Virtual Playdate pairs your child up with another child based on age and interests.
                            Once we find a match, you will recieve an email with a link to a playdate video stream
                            and more detailed information regarding the event.
                </h1>
                    </div>
                    <div className="dates-content-container">
                        <TextInput
                        id="name"
                        labelText="Name:"
                        className="input"
                        />
                        <TextInput
                        id="day"
                        labelText="Day of the Week:"
                        className="input"
                        />
                        <TextInput
                        id="time"
                        labelText="Time:"
                        className="input"
                        />
                        <TextArea
                        id="interests"
                        labelText="Interests:"
                        className="input"
                        />
                        <TextInput
                        id="email"
                        labelText="Email:"
                        className="input"
                        />
                        <Button className="dates-class-button" href="/learn">
                        Sign Up
                        </Button>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Playdates;