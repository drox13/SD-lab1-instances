var express = require('express');
var app = express();
const port = 9800;

app.get('/', function(req, res){
   res.send("Esta es una instancia HOLA!");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
 });

 app.get('/status', (req, res) => {
     res.sendStatus(200);
 })
