"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var server = express();
server.get('/', function (req, res) {
    res.send("test");
});
server.listen(80, function () {
    console.log("Connected");
});
console.log("Server start");
//# sourceMappingURL=index.js.map