import React, { useState } from 'react';
import './LoginPage.css';
import { Container } from 'react-bootstrap';
import image from '../../assets/kids-drawing.png';
import { loginAsTeacher, loginAsStudent } from '../../server/service.js';

/* document */

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [isStudent, setIsStudent] = useState('')
    const [loginStatus, setStatus] = useState('');

    const performLogin = (e) => {
        e.preventDefault();
        if (isStudent) {
            loginAsStudent(email, password).then((res) => {
                setStatus(res.message);
            }).catch((err) => {
                setStatus(err.message)
            })
        } else {
            loginAsTeacher(email, password).then((res) => {
                setStatus(res.message);
            }).catch((err) => {
                setStatus(err.message)
            })
        }

        if (document.getElementById("login_email").value === "" &&
            document.getElementById("login_email").value === "" &&
            document.getElementById("login_email").value === "") {
            alert("All fields are required");
        } else {
            window.location.href="/home"
        }
    }

    return (
        <Container>
            <div className="login-page">
                <div className="loginLayout">
                    <form onSubmit={(e) => performLogin(e)}>
                        <label className="labelLayout">Email:</label> <br /><br />
                        <input onChange={(e) => setEmail(e.target.value)}
                        className="inputLayout" type="text" id="login_email"></input><br /><br />
                        <label className="labelLayout">Password:</label><br /><br />
                        <input onChange={(e) => setPassword(e.target.value)}
                            className="inputLayout" type="password" id="login_password"></input><br /><br />
                        <label className="checkboxTextLayout">Are you a student?</label>
                        <input onChange={(e) => setIsStudent(e.target.checked)}
                            className="checkboxLayout" type="checkbox" id="login_checkbox"></input><br /><br /><br />
                        <button  className="buttonLayout" type="submit" id="login_button">Login</button>
                    </form>
                    <p className="loginStatus">{loginStatus}</p>
                </div>
                <img className="login-image" alt="empty" src={image} />
            </div>
        </Container>
    );
}

export default LoginPage;

