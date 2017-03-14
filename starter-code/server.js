'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file...DONE

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
//This sets the PORT to 3000, or to whatever is there if PORT's value has changed or was configured by another host?

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'))
app.get('*', function(request, response) {
  
  // TODO: Using the response object, send the index.html file back to the user
  response.sendFile('/public/index.html', {root: '.'})
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('*', function(request, response) {
  response.sendFile('/public/new.html', {root: '.'})
})

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`server up on ${PORT}`)
});
