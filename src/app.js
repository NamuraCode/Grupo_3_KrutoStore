const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'../public');
const port = process.env.PORT || 3000;
const routers = require('./routers/index.routes')
<<<<<<< HEAD
const session = require('express-session');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');



app.use(express.static(publicPath));
=======
const methodOverride = require('method-override')
>>>>>>> 06a309b9a791cc176c7bcc9e7494cda724bc16b8

app.listen(port,()=>{
    console.log('listen on')
});

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));
<<<<<<< HEAD
app.use(methodOverride('_method'));
app.use(session({
    secret : 'Secret',
    resave: true,
    saveUninitialized: true,
}))

app.use(express.json())

app.use(cookieParser)

=======
app.use(express.json())
app.use(methodOverride('_method'))
>>>>>>> 06a309b9a791cc176c7bcc9e7494cda724bc16b8
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