const express = require('express');
const router = express.Router();
const db = require('../utils/PoolConnection')

router.get('/', function(req, res){
    res.render('body');
})

router.post('/', function(req, res){
    
});

router.get('/signin', function(req, res){
    res.render('signin');
})

router.post('/signup', async function(req, res){
    const data = [
        req.body.email,
        req.body.fname,
        req.body.lname,
        req.body.password
    ]

    await db.query('INSERT INTO profile(email, firstname, lastname, password) VALUES (?)',[data])
    res.redirect('/signin');
});

module.exports = router;
