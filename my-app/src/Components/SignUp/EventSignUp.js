import React  from 'react'
import { Container } from 'react-bootstrap';
import './Event.css'

class EventSignUp extends React.Component {
    render() {
        return (
            <Container>
                <div className="eventContainer">
                    <form className="eventForm" action="http://localhost:3000/addevent" method="POST">
                        <label className="eventLabel" >Date:</label> <br /><br />
                        <input className="eventInput" type="text" id="event_date"></input><br /><br />
                        <label className="eventLabel">Start Time:</label><br /><br />
                        <input className="eventInput" type="text" id="event_start_time"></input><br /><br />
                        <label className="eventLabel">End Time:</label><br /><br />
                        <input className="eventInput" type="text" id="event_end_time"></input><br /><br />
                        <label className="eventLabel" >Subject Description:</label><br /><br />
                        <input className="eventInput" id="event_desc"></input><br /><br /><br />
                        <button className="eventButton" type="button" id="event_signup_button">Create Session</button>
                    </form>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FNew_York&amp;src=Y292aWQxOXRlYW1oYWNrQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;showPrint=0&amp;showTabs=0&amp;mode=WEEK" style={{ border: "solid 1px #777", position: "relative", left: "400px", top: "100px", zIndex: "1" }} width="800" height="600" frameBorder="0" scrolling="no" title="Live Classes"></iframe>
            </Container>
        )
    }
}

export default EventSignUp;