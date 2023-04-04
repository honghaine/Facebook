const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('body');
})

router.post('/', function(req, res){
    
});

router.get('/signin', function(req, res){
    res.render('signin');
})

module.exports = router;
