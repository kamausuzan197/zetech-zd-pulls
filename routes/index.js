const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/',(req, res) =>{
    res.render('register')
})

module.exports = router