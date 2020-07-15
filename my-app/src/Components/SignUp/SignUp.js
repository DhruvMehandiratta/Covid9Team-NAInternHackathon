import React from 'react'
  
export default function signup() {
    return (
        <>
            <body style={{backgroundColor: "Yellow", marginTop: "100px", marginLeft: "1000px"}}>    
            <form>
            <label style={{fontFamily: "Arial", fontSize:"25px"}}
            >Parent's Name:</label> <br/><br/>
            <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro",height:"50px", width:"300px", fontFamily: "Arial"}} type="text" id="parents_name"></input><br/><br/>
            <label style={{fontFamily: "Arial", fontSize:"25px"}}>Child's Name:</label><br/><br/>
            <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="text" id="child_name"></input><br/><br/>
            <label style={{fontFamily: "Arial", fontSize:"25px"}}>Email:</label><br/><br/>
            <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="text" id="email"></input><br/><br/>
            <label style={{fontFamily: "Arial", fontSize:"25px"}}>Password:</label><br/><br/>
            <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="password" id="password"></input><br/><br/><br/>
            <button style={{backgroundColor: "Pink",height:"50px", width:"100px", borderRadius: "12px"}} type="button" id="signup_button">Sign Up</button>
        </form>
        </body>
    </>
    )
}