import { options } from "./options/mysqlDB.js";
import knex  from "knex";

const knexConnetion = knex(options);

knexConnetion.from('cars').where('id', 1)
    .update({ price: 5000 })
    .then(() => console.log('Registro Actualizado'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnetion.destroy()
    });