var express = require('express');
var app = express();
const port = 7000;

app.get('/', function(req, res){
   res.send("mantiene viv el contenedor!");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
 });