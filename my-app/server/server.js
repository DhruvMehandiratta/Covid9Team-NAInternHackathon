const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const PORT = 5000;
const cookieParser = require("cookie-parser");
const { registerTeacher, registerStudent, loginStudent, loginTeacher } = require('./db.js')

app.use(cookieParser());
const bodyParser = require('body-parser')

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//register as teacher
app.post('/register/teacher', express.json(), async (req, res) => {
  const { email, name, phone } = req.body;
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
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
  const { email, parent_name, child_name } = req.body;
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
  const info = { email: email, parent_name: parent_name, child_name: child_name, password: hashedPassword };
  try {
    await registerStudent(info)
    res.status(200).json({ message: "Student successfully registered" })
  } catch (err) {
    res.status(409).json({ message: err })
  }
})
//log in as a teacher
app.post("/login/teacher", express.json(), async (req, res) => {
  const { email, password } = req.body;
  const info = { email: email, password: password };
  try {
    const hashedPassword = await loginTeacher(info)
    if (bcrypt.compareSync(password, hashedPassword)) {
      res.status(200).json({ message: "Teacher successfully logged in" });
    }
    else {
      res.status(409).json({ message: "Wrong password" })
    }
  } catch (err) {
    res.status(409).json({ message: "Not registered" })
  }
});

//log in as a student
app.post("/login/student", express.json(), async (req, res) => {
  const { email, password } = req.body;
  const info = { email: email, password: password };
  try {
    const hashedPassword = await loginStudent(info);
    if (bcrypt.compareSync(password, hashedPassword)) {
      res.status(200).json({ message: "Student successfully logged in" });
    }
    else {
      res.status(409).json({ message: "Wrong password" })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
