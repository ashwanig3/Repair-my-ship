const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/api/user', userController.signup);

module.exports = router;
