import { options } from "./options/mysqlDB.js";
import knex  from "knex";

const knexConnetion = knex(options);

knexConnetion.from('cars').select('*')  /* Esta linea es la misma que la SQL "SELECT = FROM coderhouse.cars;" */
    .where('price', '>', '5000') /* CONDICION PARA EL SELECT */
    .orderBy('price', 'desc') /* Condicion de ordenamiento */
    .then((rows) => {        /* rows seria un arreglo que sera recorrido y mostra elementos */
        for(let row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`)  /* arreglo de objetos */
        }
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnetion.destroy()
    });