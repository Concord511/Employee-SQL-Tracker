const db = require('../../db/connections');

// Query and return departments table
let queryDepartments = function() {
    const sql = `SELECT * FROM departments`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    })
};

// INSERTS department into departments table
let addDepartment = function(params) {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve({
                    message: 'Successfully added department',
                    data: result    
            });
        });
    });
};

// DELETE department from departments table
let deleteDepartment = function(id) {
    const sql = `DELETE FROM departments WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.query(sql, id, (err, result) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve({
                message: 'Successfully deleted department',
                changes: result.affectedRows,
                id: params.id
            });
        });
    });
}

module.exports = {
    queryDepartments,
    addDepartment,
    deleteDepartment
}