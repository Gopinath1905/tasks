const express = require('express');
const { status } = require('express/lib/response');
const router = express.Router();

const couponControllers = require("../controllers/controllers");

router.post('/product',couponControllers.create);
router.get('/product/:status',couponControllers.Status);

module.exports = router;