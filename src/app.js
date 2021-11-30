const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'../public');
const port = process.env.PORT || 3000;
const routers = require('./routers/index.routes')

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log('listen on')
});

app.use(express.urlencoded({extended: true}));

app.use(express.json())

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