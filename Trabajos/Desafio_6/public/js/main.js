const socket = io.connect();

const formAgregarProducto = document.getElementById('formAgregarProducto')
formAgregarProducto.addEventListener('submit', e => {
    e.preventDefault() 

    const newProduct = { 
        name: document.getElementById('name').value ,
        price: document.getElementById('precio').value,
        thumbnail: document.getElementById('foto').value
    }

    socket.emit("newProduct", newProduct); 

})

socket.on('productos', async (productos) => {
    const html = await makeHtmlTable(productos);
    document.getElementById("productos").innerHTML = html;
});

function makeHtmlTable(productos) {
    return fetch('plantillas/tabla-productos.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ productos })
            return html
        })
}

const inputUsername = document.getElementById('inputUsername')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')

const formPublicarMensaje = document.getElementById('formPublicarMensaje')
formPublicarMensaje.addEventListener('submit', e => {
    e.preventDefault()

    const newMessage = {
        author: inputUsername.value,
        text: inputMensaje.value
    };

    socket.emit("newMessage", newMessage);
    formPublicarMensaje.reset()
    inputMensaje.focus()
})

socket.on('mensajes', mensajes => {
    makeHtmlList(mensajes)
})

function makeHtmlList(data) {
   const html = data.map((elem) => {
        return(`<div><strong>${elem.author}</strong>: <em>${elem.text}</em></div>`)
    }).join(" ");
    document.getElementById('mensajes').innerHTML = html;
};

inputUsername.addEventListener('input', () => {
    const hayEmail = inputUsername.value.length
    const hayTexto = inputMensaje.value.length
    inputMensaje.disabled = !hayEmail
    btnEnviar.disabled = !hayEmail || !hayTexto
})

inputMensaje.addEventListener('input', () => {
    const hayTexto = inputMensaje.value.length
    btnEnviar.disabled = !hayTexto
})