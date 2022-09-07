import config from '../src/config.js'
import knex from 'knex'

//------------------------------------------
// productos en MariaDb
const mariaDbClient = knex(config.mariaDb)
    try {
        //Implementar creación de tabla
         await mariaDbClient.schema.dropTableIfExists('articulos');
         await mariaDbClient.schema.createTable('articulos' ,  table => {
            table.increments('id').primary();   
            table.string('title').notNullable(); 
            table.float('price');
            table.string('thumbnail');
        });
        
        
        //Inserto elementos a modo ejemplo
        const articulos = [
            {title: 'Monopoly'  ,price: 10148, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_852178-MLA44678979171_012021-O.webp'},
            {title: 'Carta del Uno', price: 1920, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_942888-MLA46738841701_072021-O.webp'},
            {title: 'YO-YO', price: 700, thumbnail: 'https://media.istockphoto.com/photos/red-yoyo-picture-id1263471487?k=20&m=1263471487&s=612x612&w=0&h=W_wA6OV_GgnDBZ8V085hY0zwIaD8jHhcqMnW0c7Qgpo='},
            {title: 'Carta del Uno', price: 1920, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_942888-MLA46738841701_072021-O.webp'}
        ];
        
         await mariaDbClient('articulos').insert(articulos);
        
        console.log('tabla productos en mariaDb creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos en mariaDb')
        console.log(error)
    } finally {
         await mariaDbClient.destroy();
    }
    
    



//------------------------------------------
// mensajes en SQLite3
const sqliteClient = knex(config.sqlite3)

    try {
        //Implementar creación de tabla
        await sqliteClient.schema.dropTableIfExists('mensajes');
        await sqliteClient.schema.createTable('mensajes', table => {
            table.increments('id').primary();
            table.string('autor').notNullable();
            table.string('hora');
            table.string('texto');
        });

        const mensaje = [
            {autor: 'Base de Datos'  ,hora: "00:00",texto:'BIENVENIDOS!' },
            {autor: 'Administracion', hora: "00:00", texto: 'AQUI PUEDES ESCRIBIR TUS MENSAJES'}
        ];

        await sqliteClient('mensajes').insert(mensaje);

        console.log('tabla mensajes en sqlite3 creada con éxito')
    } catch (error) {
        console.log('error al crear tabla mensajes en sqlite3')
    } finally {
        sqliteClient.destroy() 
    }