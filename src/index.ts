import express = require('express');

var server = express();

server.get('/', (req,res) => {
    res.send("test");
});

server.listen(80, () => {
    console.log("Connected");
})


console.log("Server start");
