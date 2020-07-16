const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const PORT = 5001;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const bodyParser = require('body-parser')

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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
    // var eventdate = req.body.event_date //yyyy-mm-dd
    // var str_st_time = req.body.event_start_time //00:00:00
    // var st_time = parseInt(str_st_time, 10)
    // var str_end_time = req.body.event_end_time
    // var end_time = parseInt(str_st_time, 10)
    // var eventtime = end_time - st_time
  

    const eventStartTime = new Date()
    eventStartTime.setDate(eventStartTime.getDay())
    const eventEndTime = new Date()
    eventEndTime.setDate(eventStartTime.getDay()) //add variable from react code 
    eventEndTime.setMinutes(eventEndTime.getMinutes() + 60) //add variable from react code 
  
  
    const event = {
        summary: '${req.body.event_desc}' , //add variable from react code '${req.body.summary}' (use bodyparser)
        location: `Video Call Link`, //add variable from react code '${req.body.zoomlink}' 
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

  app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
  })