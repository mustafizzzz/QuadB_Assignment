const express = require('express');
const { cryptoDataController, cryptoFetchController } = require('../controllers/cyptoController');

const router = express.Router();



router.get('/fetch-crypto-data', cryptoDataController);

router.get('/crypto-data', cryptoFetchController);

module.exports = router;