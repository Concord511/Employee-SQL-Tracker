const db = require('../../db/connections');

// Query and return roles table
let queryRoles = function() {
    const sql = `SELECT * FROM roles`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    })
};

// INSERTS role into roles table
let addRole = function(title, salary, departmentId) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
    let params = [title, salary, departmentId];
    
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve({
                message: 'Successfully added role',
                data: result
            });
        });
    });
};

module.exports = {
    queryRoles,
    addRole
}