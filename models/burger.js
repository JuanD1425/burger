var orm = require('../config/orm.js');

var burger = {
    addBurger: function(cols, vals, db) {
        orm.addBurger('burgers', cols, vals, function(res) {
            db(res);
        });
    },
    eatBurger: function(objColVals, condition, db) {
        orm.eatBurger('burgers', objColVals, condition, function(res) {
            db(res);
        });
    },
    selectAll: function(db) {
        orm.selectAll('burgers', function(res) {
            db(res);
        });
    }
};

module.exports = burger;