const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'../public');
const port = process.env.PORT || 3001;
const routers = require('./routers/index.routes')
require('dotenv').config()
const session = require('express-session');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const {verificacionCookie} = require('./middlewares')

app.listen(port,()=>{
    console.log(`listen on ${port}`)
});

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.use(session({secret:"kruto secret",
        resave: false,
	    saveUninitialized: false
    }))

app.use(express.json())

app.use(cookieParser())

app.use(verificacionCookie)

app.set('views',path.join(__dirname,'./views'))
app.set('view engine', 'ejs')


app.use('/', routers);

app.use((req, res, next) => {
    res.status(404).render('error')
});