import React from 'react';
import './Playdates.css';
import { Container } from 'react-bootstrap';


class Playdates extends React.Component {
    render() {
        return (
            <Container className="datesContainer">
                <div className="dates-page">
                    <div className="dates-text-container">
                        <h1 className="dates-text">
                            Virtual Playdate pairs your child up with another child based on age and interests.
                            <br/>
                            <br/>
                            Once we find a match, you will recieve an email with a link to a playdate video stream
                            and more detailed information regarding the event.
                </h1>
                    </div>
                    <div className="dates-content-container">
                        <div className="contentContainer">                    <label className="inputLabel">Name:</label>
                            <br />
                            <br />
                            <input className="input" type="text" id="name"></input>
                            <br />
                            <br />
                            <label className="inputLabel">Day:</label>
                            <br />
                            <br />
                            <input className="input" type="text" id="day"></input>
                            <br />
                            <br />
                            <label className="inputLabel">Time:</label>
                            <br />
                            <br />
                            <input className="input" type="text" id="time"></input>
                            <br />
                            <br />
                            <label className="inputLabel">Interests:</label>
                            <br />
                            <br />
                            <input className="input" type="text" id="interests"></input>
                            <br />
                            <br />
                            <label className="inputLabel">Email:</label>
                            <br />
                            <br />
                            <input className="input" type="text" id="email"></input>
                            <br />
                            <br />
                            <button className="dates-class-button" href="/learn">
                                Sign Up
                        </button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Playdates;