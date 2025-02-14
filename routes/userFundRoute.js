const express = require('express')
const router = express.Router();
const UserFundController = require('../controller/userFundController');

router.post('/create/:uuid', UserFundController.Userfund);
router.get('/list/:uuid', UserFundController.UserFundList)
module.exports = router;