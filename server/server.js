const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('./public'));

app.get('/test',(req,res)=>{
  const customers = [{id:1, first:"john", last:"doe"},{id:2, first:"mary", last:"lin"}];
  res.json(customers);
})
//log in
app.get("/session", (req, res) => {
    console.log(req);
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


app.post("/session", express.json(), (req, res) => {
  const { username,password } = req.body;
  console.log(req.body);
  if (!username) {
    res.status(401).json({ error: "LOGIN_REQUIRED" });
  } else {
    res.status(200).json({ username: username });
  }
});
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})