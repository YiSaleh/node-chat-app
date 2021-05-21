const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { Socket } = require('net');

const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('user was disconnected')
    console.log('New user connected');

    socket.on('disconnect', () => {

    })
});

server.listen(port, () => {
    console.log(`app is running on ${port}`);
});

fs.readFile(FILE_LOCATION, function (err, data) {
    if (err) throw err;
    if(data.includes('hello')){
     console.log(data)
    }
  });