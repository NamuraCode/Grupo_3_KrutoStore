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

<<<<<<< HEAD
app.get('/productCart',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productCart.html'))
});
=======
>>>>>>> 63848aaddde86f1987744aa39eed893c5ac5b17f
