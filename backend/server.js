const express = require('express');

//express app
const app = express(); 

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Booking API');
});

//listen for requests
app.listen(4000), () => {
    console.log('listening for requests on port 4000');
}

