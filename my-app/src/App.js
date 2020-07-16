import React, { useState, useContext } from "react";
import { loginAsTeacher } from "./service";

import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const performLogin = (e) => {
    e.preventDefault();
    loginAsTeacher(username, password)
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={(e) => performLogin(e)}>
        <input onChange={(e) => { setUsername(e.target.value) }} />
        <input onChange={(e) => { setPassword(e.target.value) }} />
        <button type="submit" disabled={!username}>
          Login
          </button>
      </form>
    </div>
  );
}

export default App;
