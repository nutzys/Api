const db = require('../util/database');

const User = {
    getUsers: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    createUser: (name, callback) => {
        db.query('INSERT INTO users(name) VALUES(?)', [name], callback);
    }
}

module.exports = User;