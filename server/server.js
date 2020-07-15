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
  const eventStartTime = new Date()
  eventStartTime.setDate(eventStartTime.getDate()+1)
  const eventEndTime = new Date()
  eventEndTime.setDate(eventStartTime.getDate()+1) //add variable from react code 
  eventEndTime.setMinutes(eventEndTime.getMinutes()+45) //add variable from react code 

  const event = {
      summary: `XYZ Class`, //add variable from react code '${req.body.summary}' (use bodyparser)
      location: `Zoom Link`, //add variable from react code '${req.body.zoomlink}' 
      description: `Will teach xyz subject`, //add variable from react code '${req.body.description}'
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

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})