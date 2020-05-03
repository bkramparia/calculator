const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
var num1= Number(req.body.num1);
var num2= Number(req.body.num2);
var result= num1+num2;
res.send("the result is :" + result);

});

app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi= (weight/Math.pow(height,2)).toFixed(2);
  res.send("Your BMI is:" + bmi);
});
// testing ip restriction 
// var server = http.createServer(function (req, res) {
//   // Your normal request handling goes here
//   server.on('connection', function (sock) {
//     console.log(sock.remoteAddress);
//     // Put your logic for what to do next based on that remote address here
//   });
//
// });

app.listen(3000,function(){
  console.log("server started");
});
