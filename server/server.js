const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const routes = require('./lib/routes');

let port = 6061;

mongoose.connect('mongodb://localhost:27017/resumeproject', {useNewUrlParser: true, useUnifiedTopology: true});

let app = express();

app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1/', routes);

app.listen(port, function() {
  console.log("Listening on :%d", port);
});
