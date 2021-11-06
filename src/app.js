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
app.use('/', routers);

app.use('/productCart', routers);

app.get('/products', routers);

app.get('/login', routers);

app.get('/productDetail', routers);

app.get('/productForm', routers);

app.get('/register', routers);

app.get('/index', routers);