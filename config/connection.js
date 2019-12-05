const mysql = require('mysql2');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
        user: 'ydwd9dno9kbywqka',
        password: 'vzesr72xetpwpq27',
        database: 'uwr48sdazfxg2lvh'
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