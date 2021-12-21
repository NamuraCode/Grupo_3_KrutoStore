const express = require('express')
const path = require('path')
const session = require('express-session');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');


 app.use(methodOverride('_method'));
 app.use(session({
     secret : 'Secret',
     resave: true,
     saveUninitialized: true,
 }))

 app.use(cookieParser)

 app.use(methodOverride('_method'))
 