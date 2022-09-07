import { options } from "./options/mysqlDB.js";
import knex from "knex";

const knexConnetion = knex(options);

(async () => {
    try {       /* 7 */
        console.log('-------> Borro si exite la tabla')
        await knexConnetion.schema.dropTableIfExists('articulos') /* Es metodo asincrono asi que agrego await */

        console.log('-----------> Creamos la tabla')      /* 1 */
        await knexConnetion.schema.createTable('articulos', table => {  
            table.increments('id').primary();
            table.string('nombre', 15).notNullable();
            table.string('codigo', 10).notNullable();
            table.float('precio');
            table.integer('stock');
        });

        console.log('-----------> Insertando registro')     /* 2 */
        const articulos = [
            { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24 },
            { nombre: 'Harina', codigo: 'CD-34', precio: 12.80, stock: 45 },
            { nombre: 'DDL', codigo: 'EF-56', precio: 32.30, stock: 16 },
            { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34 },
            { nombre: 'Crema', codigo: 'CR-77', precio: 67.90, stock: 24 }
        ];

        await knexConnetion('articulos').insert(articulos);

        console.log('-----------> Mostrando registro') /* 3 */
        const resultado = await knexConnetion('articulos').select('*')
        console.log(resultado);

        console.log('-----------> delete  registro') /* 4 */
        await knexConnetion.from('articulos').where('id', 3).del()

        console.log('-----------> Update  registro') /* 5 */
        await knexConnetion.from('articulos').where('id', 2).update({stock: 0});

        
    } catch(error) {
        console.log(error);
    } finally {
        knexConnetion.destroy();
    }
})()




/* Realizar un proyecto en Node.js que se conecte a la base de datos llamada ecommerce implementada en MariaDB y ejecute las siguientes procesos:
 1-Debe crear una tabla llamada articulos con la siguiente estructura:
 Campos: 
    - nombre tipo varchar 15 caracteres no nulo
    - codigo tipo varchar 10 caracteres no nulo
    - precio tipo float
    - stock tipo entero
    - id clave primaria autoincremental no nula
2-Insertar 5 articulos en esa tabla, con datos de prueba con stocks positivos 
3-Listar la tabla mostrando los resultados en la consola
4-Borrar el articulo con id = 3
5-Actualizar el stock a 0 del articulo con id = 2

Notas:
6- Crear un único archivo ejecutable a través de node.js que realice lo pedido. Considerar que estos son procesos asincrónicos que devuelven promesas y deben ser anidados para mantener el orden de operación. Utilizar la sintaxis then/catch
7- Agregar como primera acción que, en caso de existir la tabla, la borre (drop), así al ejecutar estas mismas tareas, empezamos desde cero sin errores y datos residuales.

 */