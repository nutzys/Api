const db = require('../util/database');

exports.getUsers = () => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, res, fields) => {
        if(err){
            console.log(err);
        }else{
            return res;
        }
    })
}
