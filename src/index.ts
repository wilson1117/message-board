import express from 'express';
import http from 'http';
import io from 'socket.io';

var app = express();
var server = http.createServer(app);
var socket = io(server);

var port:number = <number><unknown>process.env.PORT || 80;

app.get('/', (req,res) => {
    res.redirect("index.html");
});

socket.on("connection", (req) => {
    console.log("Client Connect");
    // console.log("token: ", req.request.headers.cookie);
});

app.get('/get_token', (req, res) => {
    console.log(req.ips);
    res.end();
});

app.use(express.static('public'));
app.use('/plugin', express.static("plugin"));
app.use('/javascript', express.static('dst/public'));


server.listen(port, () => {
    console.log("Server listen at:" +　port);
})
