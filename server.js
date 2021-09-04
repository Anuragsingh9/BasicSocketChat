const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {origin: "*"}
    });

io.on('connection',(socket)=>{
    console.log('connectionnnnn');
    socket.on('sendChatToServer',(message)=>{
            console.log(message)
        // io.sockets.emit('sendChatToClient',message);
        socket.broadcast.emit('sendChatToClient',message);
    });
    socket.on('disconnect',(socket)=>{
        console.log("Disconnectttt");
    });
})

server.listen(3000,()=>{
    console.log('server is running');
})

