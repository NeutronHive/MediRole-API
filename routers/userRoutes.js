const express = require('express');
const router = express.Router();
const {updateStatus,getRole} = require('../controllers/userControllers');

router.route('/update').post(updateStatus);
router.route('/getrole').get(getRole);

module.exports = router;