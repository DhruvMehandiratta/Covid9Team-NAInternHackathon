import React from 'react'
import image from '../../assets/kids-drawing.png';
import logo from '../../assets/logo.png'
import './SignUp.css';
  
export default function signup() {
    return (
        <>
            <body  className="body"> 
            <div style={{height: "100%",
                width: "50%",
                position: "fixed",
                zIndex:"1",
                top: 0,left:0, width:"50%"}}>
            <label style={{marginLeft:"200px", marginTop: "300px", fontFamily: "Poppins", fontSize:"35px"}}>Sign Up as a Teacher today! <br></br></label>
            <img style={{width:"700px",marginTop: "200px", marginLeft: "100px" }} alt="empty" src={image} />
            <img style={{width:"100px", marginTop: "10px", marginLeft: "25px"}} alt="empty" src={logo}/>
            </div>
            <div style={{height: "100%", width: "50%", position: "fixed", zIndex:"1", top: 100, right:0, width:"50%", marginLeft:"50px", marginTop: "100px"}}>
                <form>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Name:</label> <br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro",height:"50px", width:"300px", fontFamily: "Poppins"}} type="text" id="teacher_name"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Phone Number:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", height:"50px", width:"300px", fontFamily: "Poppins"}} type="text" id="teacher_no"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Email:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", height:"50px", width:"300px", fontFamily: "Poppins"}} type="text" id="teacher_email"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Password:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", height:"50px", width:"300px", fontFamily: "Poppins"}} type="password" id="teacher_password"></input><br/><br/><br/>
                    <button style={{fontFamily: "Poppins", fontSize:"15px", marginLeft: "100px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", left:"50%", backgroundColor: "#b959ea",height:"50px", width:"100px", borderRadius: "12px"}} type="button" id="teacher_signup_button">Sign Up</button>                    
                </form>
            </div>
        </body>
    </>
    )
}