// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('<h1>Hello World\n</h1>');
// }).listen(8082);


// // Console will print the message
// console.log('Server running at http://127.0.0.1:8082/');


// var port=process.env.PORT||2000;
// var http = require('http');

// //create a server object:

// http.createServer('/index.html',function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(port); //the server object listens on port 8080

var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {

  res.render('index2.html');
  var fs = require("fs");
// var sampleObject = { "username":"hello pra" };

// fs.writeFile("./movies.json", JSON.stringify(sampleObject, null, 4), (err) => {
//     if (err) {  console.error(err);  return; };
//     console.log("File has been created");
// });


// const file = './movies.json'
// const obj = { username: 'JP'};

// fs.writeFile(file,  JSON.stringify(obj, null, 4), { flag: 'a' }, function (err) {
//   if (err) console.error(err)
// });



var currentSearchResult = 'example'
const obj = { username: 'new nod index'};
fs.readFile('./movies.json', function (err, data) {
    var json = JSON.parse(data)
    json.push(obj)

    fs.writeFile("./movies.json", JSON.stringify(json,null,4),function (err) {
          if (err) console.error(err)
         });
})


});
var fs=require('fs');
fs.readFile('./movies.json',function(err,data){
  console.log(JSON.parse(data));
});

app.listen(process.env.PORT||8080, function () {
  console.log('Example app listening on port ' + 8080 + '!');
});


