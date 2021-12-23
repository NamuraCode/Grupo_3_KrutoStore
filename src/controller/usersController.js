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
        res.cookie('testing', 'session', {maxAge: 1000 * 30})
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
        res.redirect('/register')

    },


    login: (req, res) => {
        console.log(req.cookies.testing)
        let userLogged = req.session.userLogged
        res.render('login', {userLogged:userLogged}) 
    },

    log: function userLogged(req, res, next) {
        res.locals.isLogged = false;
    
        let emailInCookie = req.cookies.userEmail;
        let userFromCookie = User.findByField('email', emailInCookie);
    
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
    
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    
        next();
    },

    profile: (req, res) => {
		return res.render('profile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
}

module.exports = user;
