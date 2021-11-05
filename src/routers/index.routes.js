const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);

router.get('/', controller.productCart);

router.get('/', controller.products)

module.exports = router;