const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('index')
})

router.get('/:userId/issue', (req, res) => {
    res.render('index')
})
router.post('/api/user', userController.signup);
router.post('/api/login', userController.logIn);
// router.post('/api/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }), 
//   function(req, res) {
//     return res.json({ user: req.user })
//   }
// );

module.exports = router;
