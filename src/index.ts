import express from 'express';
import http from 'http';
import io from 'socket.io';

var app = express();
var server = http.createServer(app);
var socket = io(server);

var port:number = 80;

app.get('/', (req,res) => {
    res.send("test");
});

app.get('index.html', (req, res) => {
    console.log('test');
});
socket.on("connection", (req) => {
    console.log("Client Connect");
    console.log("token: ", req.request.headers.cookie);
});

app.use(express.static('assets'));


server.listen(port, () => {
    console.log("Server listen at:" +　port);
})
