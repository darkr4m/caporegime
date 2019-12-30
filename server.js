const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000; //Development port.

//Connect to the Database
connectDB();

//Sample route
app.get('/', (req,res) => res.send('API Running.'));

//Server Initilization
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`))

