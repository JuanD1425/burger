var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burger.addBurger(['burgerName', 'devoured'], [req.body.burgerName, req.body.devoured], function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.eatBurger({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/burgers');
    });
});

module.exports = router;