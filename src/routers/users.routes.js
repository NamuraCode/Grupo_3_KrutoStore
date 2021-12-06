const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controller/userController');
const indexController = require('../controller/indexController');
const multer = require('multer');
const {body} = require('express-validator');
