const express = require('express');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public')); //serve static file
app.use('/styles', express.static(__dirname + 'public/styles'));
app.use('/script', express.static(__dirname + 'public/script'));
app.use('/images', express.static(__dirname + 'public/images'));


app.use(function(err, req, res, next){
    console.log("error");
    res.status(500).render('500');
});


app.get('/', function(req, res){
    res.render('body');
});

app.listen(3000);

