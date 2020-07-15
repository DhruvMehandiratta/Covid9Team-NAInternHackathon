import React from 'react'
  
export default function signup() {
    return (
        <>

            <body>    
            <div style={{height: "100%",
                width: "50%",
                position: "fixed",
                zIndex:"1",
                top: 0,left:0, width:"50%", marginLeft:"200px", marginTop: "350px"}}>
            <label style={{fontFamily: "Arial", fontSize:"25px"}}>insert some words here? <br></br> Sign Up Today!</label>
            </div>
            <div style={{height: "100%", width: "50%", position: "fixed", zIndex:"1", top: 100, right:0, width:"50%", marginLeft:"50px", marginTop: "100px"}}>
                <form>
                    <label style={{fontFamily: "Arial", fontSize:"25px"}}>Parent's Name:</label> <br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro",height:"50px", width:"300px", fontFamily: "Arial"}} type="text" id="parents_name"></input><br/><br/>
                    <label style={{fontFamily: "Arial", fontSize:"25px"}}>Child's Name:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="text" id="child_name"></input><br/><br/>
                    <label style={{fontFamily: "Arial", fontSize:"25px"}}>Email:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="text" id="email"></input><br/><br/>
                    <label style={{fontFamily: "Arial", fontSize:"25px"}}>Password:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial",height:"50px", width:"300px"}} type="password" id="password"></input><br/><br/><br/>
                    <button style={{fontFamily: "Arial", fontSize:"15px", marginLeft: "100px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", left:"50%", backgroundColor: "Pink",height:"50px", width:"100px", borderRadius: "12px"}} type="button" id="signup_button">Sign Up</button>
                </form>
            </div>
        </body>
    </>
    )
}