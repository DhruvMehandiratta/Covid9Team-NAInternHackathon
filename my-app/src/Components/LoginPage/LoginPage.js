import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../assets/kids-drawing.png';

const LandingPage = () => {
    return (
        <Container>
            <div className="main-page">
                <div style={{alignContent: "center", height: "100%", position: "fixed", zIndex:"1", top: 100, left:750, width:"50%", marginTop: "100px"}}>
                    <form>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Email:</label> <br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro",height:"50px", width:"300px", fontFamily: "Poppins"}} type="text" id="login_email"></input><br/><br/>
                    <label style={{fontFamily: "Poppins", fontSize:"25px"}}>Password:</label><br/><br/>
                    <input style={{fontSize:"25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins",height:"50px", width:"300px"}} type="password" id="login_password"></input><br/><br/>
                    <label style={{fontFamily: "ComicSans", fontSize:"30px"}}>Are you a student?</label>
                    <input style={{marginLeft:"10px", top:"20", fontSize:"10px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Poppins",height:"30px", width:"30px"}} type="checkbox" id="login_checkbox"></input><br/><br/><br/>
                    <button style={{fontFamily: "Poppins", fontSize:"15px", marginLeft: "50px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", backgroundColor: "#b959ea",height:"50px", width:"180px", borderRadius: "12px"}} type="button" id="login_button">Login</button>       

                    </form>

                </div>
                <img className="main-image" alt="empty" src={image} />
            </div>
        </Container>
    );
}

export default LandingPage;

