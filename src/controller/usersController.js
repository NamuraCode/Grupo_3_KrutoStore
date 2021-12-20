const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('../model/users.json');
const { validationResult } = require('express-validator');

const user = {  
    'register': (req, res) => {
        res.render(path.resolve(__dirname, '../views/usuarios/registro'))
    },
    'createUser': (req, res) => {
        let user = {
            usename: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        user.push(createUser)
        const userFile = JSON.stringify(userFile, null, 4)
        fs.writeFileSync(path.join(__dirname, '../model/users.json'), userFile)
        console.log(create)
        res.redirect('/register')
    },
    login: (req, res) => {
        res.render('login')
    }
}

module.exports = user;
