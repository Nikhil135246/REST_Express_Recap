import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/user.js';
//! Lesson 1 : Setting up a basic Express server
const app = express();
// app is your express application

const PORT = process.env.PORT || 5000;


// this says to use the body parser middleware to parse JSON bodies
// in laymen terms, it decide we gonna use json format for sending and receiving data
app.use(express.json());



// this starts the server and listens on the Provided port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//! Lesson 2 : Creating a simple route 

app.use('/users',usersRoutes)
app.get('/users', (req, res) => {
  res.send('Hello, World!');
});