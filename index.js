const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (client) => {
    client.on('message', (data) => {
        console.log('data', data);
        
        io.emit('message', data);
    });
    client.on('disconnect', () => { 
        console.log('disconnected');
     });

});

server.listen(4000, () => {
    console.log('listenning.'); 
});