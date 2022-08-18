const Container = require('./main')

async function main(){
    const products = new Container('products.txt')
    // Prueba metodo getAll()
    console.log('Mostramos todos los productos')
    let allProducts = await products.getAll()
    console.log(allProducts)
    // Prueba metodo getById()
    let idToSearch = 4
    console.log(`Mostramos por consola un producto con id ${idToSearch}`)
    let productById = await products.getById(idToSearch)
    console.log(productById)
    // Prueba metodo save()
    let newProduct1 = {"id":5, "name":"Juego de mesa Loteria", "price": 4600, "src":"https://http2.mlstatic.com/D_NQ_NP_960272-MLA50220147541_062022-O.webp"} // Prueba con un producto que ya posee id
    await products.save(newProduct1)
    let newProduct2 = {"name":"Rompecabeza Frozen", "price": 1966, "src":"https://http2.mlstatic.com/D_NQ_NP_682267-MLA46833826068_072021-O.webp"} // Prueba con un producto sin id
    await products.save(newProduct2)
    // Prueba deleteById()
    console.log('Prueba de eliminacion')
    let productIdToDelete = 2
    await products.deleteById(productIdToDelete)
    allProducts = await products.getAll() // Actualizamos la variable allProducts para ver si se ha eliminado el elemento
    console.log(allProducts)
    // Prueba deleteAll()
    await products.deleteAll()
}
main()