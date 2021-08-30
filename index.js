var express = require('express');
var app = express();
const port = 9800;

app.get('/', function(req, res){
   res.send("Esta es una instancia!");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
 });

 function between(min, max) {  
   return Math.floor(
     Math.random() * (max - min) + min
   )
 }
 
 app.get('/status', (req, res) => {
     res.sendStatus(200);
 })