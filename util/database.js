const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: '',
    password: '',
    database: '',
});

module.exports = db;