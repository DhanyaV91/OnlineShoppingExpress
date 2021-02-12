const express = require('express');
const router = express.Router();
const { getProductDetails } = require('./controller/productcontroller');

router.route('/:type').get(getProductDetails);

module.exports = router;