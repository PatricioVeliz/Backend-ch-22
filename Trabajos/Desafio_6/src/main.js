const express = require('express')

const { Server: HttpServer } = require('http') 
const { Server: Socket } = require('socket.io') 

const ContenedorMemoria = require('../contenedores/ContenedorMemoria.js')
const ContenedorArchivo = require('../contenedores/ContenedorArchivo.js')

const app = express();
const httpServer= new HttpServer(app);
const io = new Socket(httpServer);



const products = new ContenedorArchivo('./contenedores/productos.txt');



async function verProductos() {
    return await products.getAll();
};


const mensajes = [
    {author:"Developer" , text: "Bienvenidx al sitio web"}
];

io.on('connection', async socket => {
 
    console.log("Cliente conectado");
   
    socket.emit('productos', await verProductos());

    socket.on("newProduct", async data =>{
        await products.saveProduct(data);
        io.sockets.emit('productos', await verProductos())
    })

    socket.emit('mensajes', mensajes);

    socket.on("newMessage", data => {
        mensajes.push(data);
        io.sockets.emit("mensajes", mensajes)
    })

});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')) 

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))