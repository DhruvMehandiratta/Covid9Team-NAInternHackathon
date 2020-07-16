import React from 'react';
import './Calendar.css';
import { Container, Button } from 'react-bootstrap';

class Calendar extends React.Component { 
	render() {
		return (
			<Container className="calendarContainer">
            <div className="calendar-page">
                <div className="calendar-text-container">
                    <h1 className="calendar-text">
                        Click to sign up to our live classrooms taught by certified teachers
                    </h1>
                        <Button className="connectButton" href="/localhost:9966/#init">
                            Connect Now!
                        </Button>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FNew_York&amp;src=Y292aWQxOXRlYW1oYWNrQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;showPrint=0&amp;showTabs=0&amp;mode=WEEK"  style={{border:"solid 1px #777", position:"relative", left:"200px", top: "-180px", zIndex: "1"}}  width="800" height="600" frameBorder="0" scrolling="no" title="Live Classes"></iframe>
				</div>
				</div>
        </Container>
		);
	}
}


export default Calendar;
