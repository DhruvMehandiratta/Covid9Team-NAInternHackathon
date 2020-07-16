const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const PORT = 5000;
const cookieParser = require("cookie-parser");
const { registerTeacher, registerStudent, loginStudent, loginTeacher } = require('./db.js')

app.use(cookieParser());
app.use(express.static('./public'));

//register as teacher
app.post('/register/teacher', express.json(), async (req, res) => {
  const { email, name, phone } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const info = { email: email, name: name, phone: phone, password: hashedPassword };
  try {
    await registerTeacher(info)
    res.status(200).json({ message: "Teacher successfully registered" })
  } catch (err) {
    res.status(409).json({ message: err })
  }
})
//register as student
app.post('/register/student', express.json(), async (req, res) => {
  const { email, parent_name, child_name, phone } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const info = { email: email, parent_name: parent_name, child_name: child_name, phone: phone, password: hashedPassword };
  try {
    await registerStudent(info)
    res.status(200).json({ message: "Student successfully registered" })
  } catch (err) {
    res.status(409).json({ message: "This email address has already been registered" })
  }
})
//log in as a teacher
app.post("/login/teacher", express.json(), async (req, res) => {
  const { email } = req.body;
  console.log(req.body.password)
  const hashedPassword = await bcrypt.compare(req.body.password, 10);
  const info = { email: email, password: hashedPassword };
  try {
    await loginTeacher(info)
    res.status(200).json({ message: "Teacher successfully logged in" });
  } catch (err) {
    res.status(409).json({ message: err })
  }
});

//log in as a student
app.post("/login/student", express.json(), async (req, res) => {
  const { email } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const info = { email: email, password: hashedPassword };
  try {
    await loginStudent(info)
    res.status(200).json({ message: "Student successfully logged in" });
  } catch (err) {
    res.status(409).json({ message: err })
  }
});

//log out
app.delete("/session", (req, res) => {
  const sid = req.cookies.sid;
  res.clearCookie("sid");
  deleteSession(sid);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
