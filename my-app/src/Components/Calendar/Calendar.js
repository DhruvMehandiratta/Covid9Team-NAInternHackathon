import React from 'react';
import './Calendar.css';
import { Container } from 'react-bootstrap';

class Calendar extends React.Component { 
	render() {
		return (
			<Container className="calendarContainer">
            <div className="calendar-page">
                <div className="calendar-text-container">
                    <h1 className="calendar-text">
                        Click to sign up to our live classrooms taught by certified teachers
                    </h1>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%237986CB&amp;ctz=America%2FNew_York&amp;src=Y292aWQxOXRlYW1oYWNrQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;mode=WEEK&amp;title=Live%20Classes&amp;showPrint=0&amp;showCalendars=0" style={{border:"solid 1px #777", position:"relative", left:"200px", top: "-180px", "z-index": "1"}}  width="800" height="600" frameborder="0" scrolling="no"></iframe>
					</div>
				</div>
        </Container>
		);
	}
}


export default Calendar;
