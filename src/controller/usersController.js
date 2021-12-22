const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('../data/users.json');
const users = require('../data/users.json');
const { validationResult } = require('express-validator');

const user = {
    'register': (req, res) => {
        let newUser = {
            id: (usuarios.length + 1),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), {
            encoding: 'utf-8'
        });
        let users;
        if (archivoUsers == "") {
            users = [];
        } else {
            users = JSON.parse(archivoUsers)
        }
        res.render('register')
    },

    'createUser': (req, res) => {
        let newUser = {
            id: (usuarios.length + 1),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        users.push(newUser)
        let usersJson = JSON.stringify(users, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJson)
        console.log(register)
        res.redirect('/index')

    },

    login: (req, res) => {
        res.render('login')
    },
    profile: (req, res) => {
        res.render('profile')
    }
}

module.exports = user;
