import { options } from "./options/mysqlDB.js";
import knex  from "knex";

const knexConnetion = knex(options);

const cars = [
    { name: 'Audi', price: 123123 },
    { name: 'Mercedes', price: 234234234 },
    { name: 'Volkswagen', price: 2344 },
    { name: 'Mazda', price: 23424324 },
    { name: 'Ferrari', price: 234234243 },
];

    /* QUERY PARA HACER UN INSERT DE LOS ELEMENTOS EN ESTE EJEMPLO 'CARS'*/
knexConnetion('cars').insert(cars)
    .then(() => console.log('Datos insertados'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnetion.destroy()
    });