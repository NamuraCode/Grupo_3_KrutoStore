const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'../public');
const port = process.env.PORT || 3001;
const routers = require('./routers/index.routes')
const session = require('express-session');
const methodOverride = require('method-override')
// const cookieParser = require('cookie-parser');

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log('listen on')
});

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.use(session({secret:"kruto secret",
resave: false,
	saveUninitialized: false,}))

app.use(express.json())

//app.use(cookieParser)

app.set('views',path.join(__dirname,'./views'))
app.set('view engine', 'ejs')


app.use('/', routers);

app.use('/productCart', routers);

app.use('/products', routers);

app.use('/login', routers);

app.use('/productDetail', routers);

app.use('/productForm', routers);

app.use('/register', routers);

app.use('/index', routers);

app.use('/addProduct', routers);

app.use('/editProduct', routers);

app.use('/removeProduct', routers);

app.use('/aboutUs', routers);

app.use('/opcionesPagos', routers);

app.use('/opcionesEnvios', routers);

app.use('/politicaDevoluciones', routers);

app.use((req, res, next) => {
    res.status(404).render('Not found')
});