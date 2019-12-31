const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000; //Development port.

//Connect to the Database
connectDB();

//ROUTES
    //Sample route
    app.get('/', (req,res) => res.send('API Running.'));

    app.use('/api/users', require('./routes/api/users'));
    app.use('/api/auth', require('./routes/api/auth'));



//Server Initilization
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`))

