const exp = require('express')
const app = exp()
const enrutador = require('./router')
require('dotenv').config();
const logger = require('morgan')

app.use(logger('dev'));
app.use(exp.urlencoded({extended: false}));
app.use(exp.json())
app.use(exp.static('static'))
// set the view engine to ejs

app.set('view engine', 'ejs');
app.use('/v3', enrutador);

const PORT = process.env.PORT || 8300;

app.listen(PORT,()=> {
    console.log(`Servidor escuchando en el puerto ${PORT}...`)
});

app.get('/', (req, res) => {
    res.status(200)
    res.render('pages/saludo')
})