import React, { Component } from 'react'

export default function signup() {
    return (
        <>
            <body  className="body"> 
            
            <div style={{height: "100%", position: "fixed", zIndex:"1", top: 100, left:180, width:"50%", marginTop: "100px"}}>
                <form action="http://localhost:3000/addevent" method="POST">
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Date:</label> <br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro",height:"50px", width:"300px", fontFamily: "Poppins"}} type="text" id="event_date"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Start Time:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins",height:"50px", width:"300px"}} type="text" id="event_start_time"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>End Time:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins",height:"50px", width:"300px"}} type="text" id="event_end_time"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Subject Description:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins",height:"50px", width:"300px"}} id="event_desc"></input><br/><br/><br/>
                    <button style={{fontFamily: "Poppins", fontSize:"15px", marginLeft: "50px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", backgroundColor: "#b959ea",height:"50px", width:"180px", borderRadius: "12px"}} type="button" id="event_signup_button">Create Session</button>       
                </form>
            </div>
            <div id="calendar" style={{backgroundColor:"gray", height: "70%", width: "30%", right: 200, position: "fixed", zIndex:"1", top: 100, marginTop: "100px", marginBottom: "500px"}}>
            </div>
        </body>
    </>
    )
}