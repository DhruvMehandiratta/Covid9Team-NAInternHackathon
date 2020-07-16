const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const PORT = 5000;
const cookieParser = require("cookie-parser");
const { registerTeacher, registerStudent, loginStudent, loginTeacher } = require('./db.js')

app.use(cookieParser());
const bodyParser = require('body-parser')

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}))
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
  console.log(req.body)
  const { email, parent_name, child_name } = req.body;
  const salt = await bcrypt.genSaltSync(10);
  console.log(salt)
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
  console.log(info)
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

<<<<<<< HEAD
app.post("/addevent", express.json(), (req, res) => {
  const { google } = require('googleapis');
  const { OAuth2 } = google.auth
  const oAuth2Client = new OAuth2(
      '40967611095-5act06qaram29h11hraf0pka92dt8pg7.apps.googleusercontent.com', 
      '5EPUNauI7fNMDLVVUdm_gSAB'
      )
  oAuth2Client.setCredentials({refresh_token: 
      '1//04bUQsojcy3W5CgYIARAAGAQSNwF-L9IrDGDJ0LLOHCz-dA2bNKGRcrku72v10gOcJdFexKOb13USm9lvLY-UHVUNDDFo8oM9M1k',
  })

  const calendar = google.calendar({version: 'v3', auth: oAuth2Client})
  var eventdate = req.body.event_date //yyyy-mm-dd
  var str_st_time = req.body.event_start_time //00:00:00
  var st_time = parseInt(str_st_time, 10)
  var str_end_time = req.body.event_end_time
  var end_time = parseInt(str_st_time, 10)
  var eventtime = end_time - st_time

  const eventStartTime = new Date()
  eventStartTime.setDate(eventdate)
  const eventEndTime = new Date()
  eventEndTime.setDate(eventdate) //add variable from react code 
  eventEndTime.setMinutes((str_end_time).getMinutes()+ eventtime) //add variable from react code 


  const event = {
      summary: '${req.body.event_desc}' , //add variable from react code '${req.body.summary}' (use bodyparser)
      location: `Zoom Link`, //add variable from react code '${req.body.zoomlink}' 
      description: `Will have a fun and engaging session with children!`, //add variable from react code '${req.body.description}'
      colorId: 1,
      start: {
        dateTime: eventStartTime,
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: eventEndTime,
        timeZone: 'America/New_York',
      },
    }

  calendar.freebusy.query(
      {
        resource: {
          timeMin: eventStartTime,
          timeMax: eventEndTime,
          timeZone: 'America/New_York',
          items: [{ id: 'primary' }],
        },
      },
      (err, res) => {
        if (err) return console.error('Free Busy Query Error: ', err)
          const eventArr = res.data.calendars.primary.busy
          if (eventArr.length === 0)
          return calendar.events.insert(
            { calendarId: 'primary', resource: event },
            err => {
              if (err) return console.error('Error Creating Calender Event:', err)
              return console.log('Calendar event successfully created.')
            }
          )
          return console.log(`Another event set during that time`)
      }
    )
});
=======
>>>>>>> 7ac96702bdc9f52eb8d8abbf0510122b3dd71863

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
