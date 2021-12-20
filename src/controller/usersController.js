const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('./model/users.json');
const { validationResult } = require('express-validator');

const user = {
    register: (req, res) => {
        let user = {
            id:users.length +1,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
    },
}

module.exports = user;