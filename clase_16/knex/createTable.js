/* LOGICA */

/* importamos */
import { options } from "./options/mysqlDB.js";
import knex  from "knex";

/* Con esto tenemos la conexion a la base de datos */
const knexConnetion = knex(options);

/* se crea una tabla con knex */
knexConnetion.schema.createTable ('cars', table => {
    /* asincronico, promesas */
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log('tabla creada'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnetion.destroy()
    })

/* FIN DE LA IMPLEMENTACION DE LA TABLA */