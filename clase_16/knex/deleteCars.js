import { options } from "./options/mysqlDB.js";
import knex  from "knex";

const knexConnetion = knex(options);

knexConnetion('cars').where('id', 5)
    .del() /* eliminar */
    .then(() => console.log('Registro Eliminado'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnetion.destroy()
    });