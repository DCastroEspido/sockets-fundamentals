var socket = io();

//listen information
socket.on('connect', function() {
    console.log('Connected to server');
});

//listen information
socket.on('disconnect', function() {
    console.log('Connection with server losted')
});

//Send information
socket.emit('sendMessage', {
    user: 'Daniel',
    message: 'Hello world!'
}, function(resp) {

    console.log('Server response: ', resp);
});

//listen information 
socket.on('sendMessage', function(message) {
    console.log('Server:', message);
});