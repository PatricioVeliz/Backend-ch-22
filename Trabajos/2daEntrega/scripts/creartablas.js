import knex from 'knex'
import config from '../src/config.js'



const mariaDbClient = knex(config.mariaDb)
    try {
        
         await mariaDbClient.schema.dropTableIfExists('productos');
         await mariaDbClient.schema.createTable('productos' ,  table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.float('price');
            table.string('thumbnail');
            table.string('date')
        });
        
        
        const productos = [
            {title: 'Mirinda'  ,price: 180, thumbnail:'www.mirinda.com' },
            {title: 'Seven Up', price: 190, thumbnail: 'www.sevenup.com'},
            {title: 'Pepsi', price: 185, thumbnail: 'www.pepsi.com'}
        ];
        
         await mariaDbClient('productos').insert(productos);
        
        console.log('tabla productos en mariaDb creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos en mariaDb')
        console.log(error)
    } finally {
         await mariaDbClient.destroy();
    }
    
 