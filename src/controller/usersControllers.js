const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const products = require('./model/users.json');
const { validationResult } = require('express-validator');

const userController = {
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/usuarios/register'));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/usuarios/login')); 
    },
    profile: (req, res) => {
        return res.render ('userProfile');
    },
}

module.exports = userController;