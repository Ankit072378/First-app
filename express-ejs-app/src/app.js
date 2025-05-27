var express = require('express');
var path = require('path');

var app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route
app.get('/', function(req, res) {
    res.render('index');
});

// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});