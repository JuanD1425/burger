const mysql = require('mysql2');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'R1ck&M0rtyGaga',
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Couldn't connect with msg: " + err);
        return;
    }
    console.log('Successful connection with id: ' + connection.threadId);
});

module.exports = connection;