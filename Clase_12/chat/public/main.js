const socket = io.connect();

function render(data) {
    const html = data.map(elem => {
        return(`<div><strong>${elem.author}</strong>:<em>${elem.text}</em></div>`)
    }).join(" ");
    document.getElementById('message').innerHTML = html;
}

function addMessage(e) {
    const mensaje = {
        author: document.getElementById('author').value,
        text: document.getElementById('text').value
    };

    socket.emit('new-message', mensaje);
    return false; //para no q no haga refresh
}

socket.on('message', data => {
    render(data);
});