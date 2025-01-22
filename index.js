const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for messages from a user
    socket.on('user_message', (data) => {
        const { message, sender } = data;
        io.emit('message', { message, sender }); // Broadcast the message with sender's username
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });

    
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
