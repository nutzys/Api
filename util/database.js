const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rms160ww!',
    database: 'node-learning',
});

module.exports = db;