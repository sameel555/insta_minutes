# insta_minutes

## About this Project:
This is an assignment given by insta minutes. Build a scheduler in JS with NodeJS framework and a script to run it for 10 events.
The event will consist of a text (string) and a date time at which it will run.
The scheduler must schedule the event to trigger a function at the date time mentioned in the event body.
The trigger function (API) must accept the text as input, sleep for duration of text length and return text backwards

## Tech Stack Used

- Node JS
- React JS
- Express
- MongoDB

### Dependencies
node-schedule

### How to run program

1. clone this repo
2. cd server
3. npm install    //it will install all packages used
4. goto event.js and update the event date and time to schedule the job
5. npm run server
6. Open another terminal :  cd client
7. npm install
8. npm start

### Problems Faced
 This is the first time am using node-schedule, so I took more time to implement this. Also got stucked while deploying in heroku.
 By reading so many documentation I overcame this issues

[Video Demo](https://drive.google.com/file/d/1f-RJjWRSMH72KuEpcdg_DudaEFLCcYpC/view?usp=sharing) 
