'use strict';

// doneTODO: Initialize your project using NPM to create and populate a package.json file

// doneTODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const PORT = process.env.PORT || 3000;//Whatever is in the environmental variable port or PORT #3000 :D
const express = require('express');
const app = express();

// doneTODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('/', function(request, response) {
  // doneTODO: Using the response object, send the index.html file back to the user
  response.sendFile('/public/index.html', {root: '.'});
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new', function(request, response){
  response.sendFile('public/vender/index.html', {root: '.'});
})


app.listen(PORT, function() {
  // doneTODO: Log to the console a message that lets you know which port your server has started on
  console.log(`Server up on ${PORT}`);
});
