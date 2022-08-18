const fs = require('fs');

//ejemplo de implementacion

//leer un archivo

const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);