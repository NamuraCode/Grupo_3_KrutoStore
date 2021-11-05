const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'./public');
const port = process.env.PORT || 3000;
const routers = require('./routers/index.routes')

app.use(express.static(publicPath));
app.listen(port,()=>{
    console.log('listen on')
});
app.use('/', routers);

app.use('/productCart', routers);

app.get('/products', routers);

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
});

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productDetail.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/register.html'))
});

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))

});


