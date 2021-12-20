const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('./model/users.json');
const { validationResult } = require('express-validator');

const user = {
    'register': (req, res) => {
        res.render('register')
    },
    'processRegister': (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render ('index', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.redirect('/')
    },
    
}

module.exports = user;
