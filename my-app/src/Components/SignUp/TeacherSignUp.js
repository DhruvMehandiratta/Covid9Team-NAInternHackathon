import React, { useState } from 'react'
import image from '../../assets/kids-drawing.png';
import logo from '../../assets/logo.png'
import { registerAsTeacher } from '../../server/service.js';
import './Teacher.css'

function TeacherSignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [signUpStatus, setStatus] = useState('');
    const performRegister = (e) => {
        e.preventDefault();
        registerAsTeacher(email, name, phone, password).then((res) => {
            setStatus(res.message);
        }).catch((err) => {
            setStatus(err.message)
        })
    }
    return (
        <>
            <div className="teacherContainer">
                <label className="teacherText">Sign up as a teacher today! <br></br></label>
                <img className="teacherImg1" alt="empty" src={image} />
                <img className="teacherImg2" alt="empty" src={logo} />
            </div>
            <div className="teacherContainer2">
                <form className="teacherForm" onSubmit={(e) => performRegister(e)}>
                    <label className="teacherLabel" >Name:</label> <br /><br />
                    <input onChange={(e) => setName(e.target.value)}
                        className="teacherInput" type="text" id="teacher_name"></input><br /><br />
                    <label className="teacherLabel" >Phone Number:</label><br /><br />
                    <input onChange={(e) => setPhone(e.target.value)}
                        className="teacherInput" type="text" id="teacher_no"></input><br /><br />
                    <label className="teacherLabel" >Email:</label><br /><br />
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="teacherInput" type="text" id="teacher_email"></input><br /><br />
                    <label className="teacherLabel" >Password:</label><br /><br />
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="teacherInput" type="password" id="teacher_password"></input><br /><br /><br />
                    <button className="teacherButton" type="submit" id="teacher_signup_button">Sign Up</button>
                </form>
                <p className="signUpStatus">{signUpStatus}</p>
            </div>
        </>
    )
}
export default TeacherSignUp; 