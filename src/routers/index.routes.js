const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);

router.get('/', controller.productCart);

module.exports = router;