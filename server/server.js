const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'example text',
    //     createAt: 123
    // });

    socket.emit('newMessage', {
        from: 'ba@gmail.com',
        text: 'message 1',
        createdAt: 234
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', ()  => {
        console.log('client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};