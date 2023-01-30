const express = require('express');
const { getModels } = require('../controllers/ml-models');

const router = express.Router();

router.route("/").get(getModels);

module.exports = router;