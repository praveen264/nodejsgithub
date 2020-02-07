var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {

  res.render('index2.html');});
app.listen(process.env.PORT||8080);