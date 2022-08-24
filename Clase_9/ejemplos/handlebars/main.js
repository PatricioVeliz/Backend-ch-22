const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');

fakeApi = () => [
    { name: 'Garen', lane: 'Toplaner'},
    { name: 'Vi', lane: 'Jungler'},
    { name: 'Kassadin', lane: 'Midlaner'},
    { name: 'Teemo', lane: 'Apc'},
    { name: 'Janna', lane: 'Support'}
]

app.get('/', (req, res) => {
    res.render('main', { suggestedChamps: fakeApi(), listExists: true });
})

app.listen(8080);