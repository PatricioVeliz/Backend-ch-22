const { response } = require('express');
const express = require('express');

const app = express();


const server = app.listen(8080, () => {
    console.log(`Server is Open ${server.address().port}`)
});



server.on('error', error => console.log(`Error en el server : ${error}`));




app.get('/', (request , response) => {
    response.send('<h1 style="color:coral;">Desafio 3 : Seleccionar en la ruta: /productos o /productoRandom</h1>');
})




const Contenedor = require('./main'); 
const product = new Contenedor('./products.txt');


 
async function verProductos() {
    return await product.getAll();
};
app.get('/productos', async (req , res) => {
    res.send(await verProductos());

   
});




async function productoRandom() {
     
    const allProducts = await product.getAll(); 

    
const randomElement = allProducts[Math.floor(Math.random() * allProducts.length)];


return randomElement ;
}

app.get('/productoRandom', async (req , res) => {
    res.send(await productoRandom());
});