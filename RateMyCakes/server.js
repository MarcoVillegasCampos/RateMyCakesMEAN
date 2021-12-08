var path = require("path");
const port = 8080;
const express = require('express');
const app = express();
app.set('trust proxy', 1) 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));
require("./server/config/mongoose");
require('./server/config/routes.js')(app);
app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});