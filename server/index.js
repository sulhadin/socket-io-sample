const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log('data', data);
        
        io.emit('message', data);
    });
    
    socket.on('disconnect', () => { 
        console.log('disconnected');
     });
});

http.listen(4000, () => {
    console.log('listenning.'); 
});