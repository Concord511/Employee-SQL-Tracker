const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'QBisL4M3@$!',
        database: 'employees'
    }
);

module.exports = db;