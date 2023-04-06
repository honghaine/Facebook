const express = require('express');
const router = express.Router();
const db = require('../utils/PoolConnection')
const SignUpProfile = require('../model/SignUpProfile')
const bcrypt = require('bcrypt');

router.get('/', function(req, res){
    res.render('body');
})

router.post('/', function(req, res){
    
});

router.get('/signin', function(req, res){
    res.render('signin');
})

router.post('/signin', async function(req, res){
    const userData = req.body;
    const inputPassword = userData.password;
    const [passwordAccount] = await db.query("SELECT password from profile where email = ?", userData.email);
    let passwordEqual = await bcrypt.compare(inputPassword, passwordAccount[0].password);
    if(!passwordEqual) {
        console.log('Wrong password');
        return res.render('signin');
    }   
    res.redirect('/')
})

router.post('/signup', async function(req, res){
    const profileData = req.body;
    const profile = new SignUpProfile(        
        profileData.email,
        profileData.fname,
        profileData.lname,
        await bcrypt.hash(profileData.password, 5)
    );
    
    await profile.save();

    res.redirect('/signin');
});

module.exports = router;
