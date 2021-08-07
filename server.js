// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// route
require('./routes/api/notes')(app);

// listing on PORT 3001
app.listen(PORT, function() {
    console.log('App now listening on PORT: ' + PORT);
});