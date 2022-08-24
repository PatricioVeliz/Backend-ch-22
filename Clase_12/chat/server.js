const { socket } = require('engine.io');
const express = require ('express');
const { Server: HttpServer } = require ('http');
const { Server: IOServer } = require ('socket.io');

const app = express ();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

const messages = [
    { author: "Alejandro", text: "Hola, que tal" },
    { author: "Jean", text: "Muy bien, y tú?" },
    { author: "Facundo", text: "Genial!!!" }
];

io.on('connection', socket =>{
    console.log('Nuevo cliente conectado');
    //este evento carga el historial de mensajes cuando un nuevo cliente se conecta
    socket.emit('message',messages);

    socket.on('new-message', data => {
        messages.push(data); 
        //ete evento envia un mensaje(new) a todos los clientes on
        io.sockets.emit('messsages', messages);
    });
});

httpServer.listen(8080, () => console.log('Server is running'));