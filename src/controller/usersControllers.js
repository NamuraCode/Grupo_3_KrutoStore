const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const products = require('./model/users.json');
const { validationResult } = require('express-validator');

const userController = {
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/usuarios/register'));
    },
    processRegister: (req, res) => {
        res.render(path.resolve(__dirname, '../views/login')); 

        res.redirect('/')
    },
    profile: (req, res) => {
        return res.render ('userProfile');
    },
}

module.exports = userController;