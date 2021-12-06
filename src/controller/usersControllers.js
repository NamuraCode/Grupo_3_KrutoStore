const express = require('express');
const path = require('path');
const products = require('./model/users.json');
const { validationResult } = require('express-validator');

const userController = {
    register: (req, res) => {
        return res.render ('index');
    },
    login: (req, res) => {
        return res.render ('userLoginForm');
    },
    profile: (req, res) => {
        return res.render ('userProfile');
    },
}