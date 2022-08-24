const socket = io.connect();

socket.on('mi mensaje', data => {
    alert(data);
    socket.emit('notificacion', 'mensaje recibido exitosamente');
});