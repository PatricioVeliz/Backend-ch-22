const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer} =require('socket.io');

const app= express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');
    socket.emit('mi mensaje', 'Este es el mesaje desde el servidor');
    socket.on('notificacion', data => {
        console.log(data);
        io.sockets.emit('mensaje', 'test'); /* mando un mensaje a todos los usu activos */
    });
})

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () =>{
    console.log(`Sever Running`);
});

connectedServer.on(
    'error', error => console.log(`Error en servidor ${error}`)
);
