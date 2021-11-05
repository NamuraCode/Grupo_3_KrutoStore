const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'./public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.listen(port,()=>{
    console.log('listen on')
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))
});

app.get('/productCart',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productCart.html'))
});

app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/products.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
});

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productDetail.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/register.html'))
});

app.get('/productForm',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productForm.html'))

});


