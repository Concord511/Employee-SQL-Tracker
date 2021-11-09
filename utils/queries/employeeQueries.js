const db = require('../../db/connections');

// Query and return roles table
let queryEmployees = function() {
    const sql = `SELECT * FROM employees`;

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
let addEmployee = function(firstName, lastName, roleId, managerId) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    let params = [firstName, lastName, roleId, managerId];
    
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve({
                message: 'Successfully added employee',
                data: result
            });
        });
    });
};

// update employee role

// delete employee

module.exports = {
    queryEmployees,
    addEmployee
}