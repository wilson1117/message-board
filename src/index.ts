import express from 'express';
import http from 'http';
import io from 'socket.io';

var app = express();
var server = http.createServer(app);
var socket = io(server);

var port:number = <number><unknown>process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.redirect("index.html");
});

socket.on("connection", (req) => {
    console.log("Client Connect");
    console.log("token: ", req.request.headers.cookie);
});

app.use(express.static('assets'));


server.listen(port, () => {
    console.log("Server listen at:" +　port);
})
