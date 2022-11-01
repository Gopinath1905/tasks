const express = require('express');
const router = express.Router();
const queueController = require('../contollers/controllers')

router.post('/jobmail',queueController.create);


module.exports = router;