const express = require('express');
//function we created in the routes file. 
const routes = require('./routes/routes.js');
//this works with incoming requests - to parse the body and infromation you need from a request and make it easily available. 
const bodyParser = require('body-parser');
//what is app?  it basically contains the funciotnality around a router/view/controller
const app = express();

//any incoming request parse it and assume it is JSON. Always place this above the routes call below. 
app.use(bodyParser.json());




routes(app);



module.exports = app;