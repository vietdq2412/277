var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var pubDir = require('path').join(__dirname, '/public');
app.use(express.static(pubDir));

//npm i handlebars consolidate --save
const engines = require('consolidate');
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
        res.render('index');
    })
    //////
var sarver = app.listen(5000);
console.log('is running');