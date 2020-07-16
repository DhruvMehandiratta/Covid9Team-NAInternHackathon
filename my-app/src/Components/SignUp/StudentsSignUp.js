import React, { useState } from 'react'
import image from '../../assets/kids-drawing.png';
import { Container } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { registerAsStudent } from '../../server/service.js';
import './Student.css'

const StudentsSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [parentName, setParentName] = useState('')
    const [childName, setChildName] = useState('');
    const [signUpStatus, setStatus] = useState('');
    const performRegister = (e) => {
        e.preventDefault();
        registerAsStudent(email, parentName, childName, password).then((res) => {
            setStatus(res.message);
        }).catch((err) => {
            setStatus(err.message)
        })
    }
    return (
        <Container>
            <div className="studentContainer">
                <label className="studentText" >Sign up today to enroll in our live <br></br> classrooms!</label>
                <img className="studentImg1" alt="empty" src={image} />
                <img className="studentImg2" alt="empty" src={logo} />
            </div>
            <div className="studentContainer2">
                <form className="studentForm" onSubmit={(e) => performRegister(e)}>
                    <label className="studentLabel" >Parent's Name:</label> <br /><br />
                    <input onChange={(e) => setParentName(e.target.value)}
                        className="studentInput" type="text" id="parents_name"></input><br /><br />
                    <label className="studentLabel">Child's Name:</label><br /><br />
                    <input onChange={(e) => setChildName(e.target.value)}
                         className="studentInput" type="text" id="child_name"></input><br /><br />
                    <label className="studentLabel">Email:</label><br /><br />
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="studentInput" type="text" id="child_email"></input><br /><br />
                    <label className="studentLabel">Password:</label><br /><br />
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="studentInput" type="password" id="child_password"></input><br /><br /><br />
                    <button className="studentButton" type="submit" id="child_signup_button">Sign Up</button>
                </form>
                <p className="signUpStatus">{signUpStatus}</p>

            </div>
        </Container >
    )
}
export default StudentsSignUp;