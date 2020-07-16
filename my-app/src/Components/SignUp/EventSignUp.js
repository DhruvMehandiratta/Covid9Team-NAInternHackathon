import React  from 'react'
import { Container } from 'react-bootstrap';

class EventSignUp extends React.Component {
    render() {
        return (
            <Container>
                <div style={{ height: "100%", position: "fixed", zIndex: "1", top: 100, left: 180, width: "50%", marginTop: "100px" }}>
                    <form action="http://localhost:3000/addevent" method="POST">
                        <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Date:</label> <br /><br />
                        <input style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", height: "50px", width: "300px", fontFamily: "Poppins" }} type="text" id="event_date"></input><br /><br />
                        <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Start Time:</label><br /><br />
                        <input style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins", height: "50px", width: "300px" }} type="text" id="event_start_time"></input><br /><br />
                        <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>End Time:</label><br /><br />
                        <input style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins", height: "50px", width: "300px" }} type="text" id="event_end_time"></input><br /><br />
                        <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Subject Description:</label><br /><br />
                        <input style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins", height: "50px", width: "300px" }} id="event_desc"></input><br /><br /><br />
                        <button style={{ fontFamily: "Poppins", fontSize: "15px", marginLeft: "50px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", backgroundColor: "#b959ea", height: "50px", width: "180px", borderRadius: "12px", color: "White" }} type="button" id="event_signup_button">Create Session</button>
                    </form>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FNew_York&amp;src=Y292aWQxOXRlYW1oYWNrQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;showPrint=0&amp;showTabs=0&amp;mode=WEEK" style={{ border: "solid 1px #777", position: "relative", left: "400px", top: "100px", zIndex: "1" }} width="800" height="600" frameBorder="0" scrolling="no" title="Live Classes"></iframe>
            </Container>
        )
    }
}

export default EventSignUp;