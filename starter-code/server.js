'use strict';

// DONE TODO: Initialize your project using NPM to create and populate a package.json file
// DONE TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

// The process object is a global that's describing the current process - process.env returns an object
// that contains the user's environment (is this a container, like Docker?). 
// Is this line assigning a port and a port property to the user's environment?
// This line is stating an "OR" - either use the user environment's port or Port 3000 if one doesn't exist.
const PORT = process.env.PORT || 3000;
console.log(process.env);

// DONE TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('*', function(request, response) {
  // DONE TODO: Using the response object, send the index.html file back to the user
  response.sendFile('/public/index.html', {root: '.'})
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new.html', function(request, response) {
  response.sendFile('/public/new.html', {root: '.'})
});

app.listen(PORT, function() {
  // DONE TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`Server up on ${PORT}`)
});
