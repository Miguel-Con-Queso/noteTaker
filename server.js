// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const apiRoutes = require('./routes/api/notes');
const htmlRoutes = require('./routes/html/htmlRoutes');

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// data parsing/middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
app.use(apiRoutes);
app.use(htmlRoutes);

// listing on PORT 3001
app.listen(PORT, function() {
    console.log('App now listening on PORT: ' + PORT);
});