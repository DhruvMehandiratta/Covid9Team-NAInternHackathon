const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.static('./public'));

app.get('/test',(req,res)=>{
  const customers = [{id:1, first:"john", last:"doe"},{id:2, first:"mary", last:"lin"}];
  res.json(customers);
})
//check if logged in
app.get("/session", (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
      res.status(401).json({ error: "LOGIN_REQUIRED" });
      return;
    }
    if (!sessions[sid]) {
      res.clearCookie("sid");
      res.status(403).json({ error: "LOGIN_UNAUTHORIZED" });
      return;
    }
    res.status(200).json({ username: username });
  });

//log in
app.post("/session", express.json(), (req, res) => {
  const { username,password } = req.body;
  console.log(req.body);
  res.clearCookie("sid");
  if (!username) {
    res.status(401).json({ error: "LOGIN_REQUIRED" });
  } else {
    const session = addSession({ username });
    res.cookie("sid", session.id);
    res.status(200).json({ username: session.username });
  }
});
//log out
app.delete("/session", (req, res) => {
  const sid = req.cookies.sid;
  res.clearCookie("sid");
  deleteSession(sid);
  res.sendStatus(200);
});
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})