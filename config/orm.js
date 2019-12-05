const connection = require('./connection.js');

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
};

function addParamPlaceholders(numToAdd) {
    let questionMarkArr = [];

    for (let i = 0; i < numToAdd; i++) {
        questionMarkArr.push('?');
    }

    return questionMarkArr.toString();
};

const orm = {
    addBurger: function(table, cols, vals, db) {
        let queryString = 'INSERT INTO ' + table;

        queryString = queryString + ' (';
        queryString = queryString + cols.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + addParamPlaceholders(vals.length);
        queryString = queryString + ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            db(result);
        });
    },
    eatBurger: function(table, objColVals, condition, db) {
        let queryString = 'UPDATE ' + table;

        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            db(result);
        });
    },
    selectAll: function(tableInput, db) {
        const queryString = 'SELECT * FROM ' + tableInput + ';';

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            db(result);
        });
    }
}

module.exports = orm;