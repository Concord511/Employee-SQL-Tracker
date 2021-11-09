const inquirer = require('inquirer');
const cTable = require('console.table');
const { queryDepartments, addDepartment, deleteDepartment } = require('../queries/departmentQueries');
const { queryRoles, addRole, deleteRole } = require('../queries/roleQueries');
const { queryEmployees, addEmployee, deleteEmployee } = require('../queries/employeeQueries');

let mainMenu = async function() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "mainMenu",
                message: "Main Menu",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role"
                ]
            }
        ])
        .then(async function(answer) {
            switch (answer.mainMenu) {
                case 'View all departments':
                    let departmentData = await queryDepartments();
                    console.table(departmentData);
                    mainMenu();
                    break;
                case 'View all roles':
                    let roleData = await queryRoles();
                    console.table(roleData);
                    mainMenu();
                    break;
                case 'View all employees':
                    let employeeData = await queryEmployees();
                    console.table(employeeData);
                    mainMenu();
                    break;
                case 'Add a department':
                    addDepartmentPrompt();
                    break;
                case 'Add a role':
                    addRolePrompt();
                    break;
                case 'Add an employee':
                    addEmployeePrompt();
                    break;
                case 'Update an employee role':
                    updateEmployeeRolePrompt();
                    break;
            }
        });
};

// Inquirer prompt to add a department
let addDepartmentPrompt = function() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "departmentName",
                message: "Please enter new department.",
                validate: input => {
                    if (input === '') {
                        return "Please enter a department."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then(async function(answer) {
            let data = await addDepartment(answer.departmentName);
            console.log(data.message);
            mainMenu();
        });
};

// Inquirer prompt to add a role
let addRolePrompt = function() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "roleName",
                message: "Please enter new role.",
                validate: input => {
                    if (input === '') {
                        return "Please enter a role."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "salary",
                message: "Please enter salary.",
                validate: input => {
                    if (input === '') {
                        return "Please enter a role."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then(async function(answer) {
            let role = answer.roleName;
            let salary = answer.salary;
            let data = await queryDepartments();
            let departments = [];
            let departmentIds = [];
            data.forEach(element => {
                departments.push(element.name);
                departmentIds.push(element.id);
            })

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "department",
                        message: "Please select a department for this role.",
                        choices: departments
                    }
                ])
                .then(async function(answer) {
                    let index = departments.indexOf(answer.department);
                    let departmentId = departmentIds[index];
                    let data = await addRole(role, salary, departmentId);
                    console.log(data.message);
                    mainMenu();
                });
        });
};

// Inquirer prompt to add an employee
let addEmployeePrompt = function() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter employee's first name.",
                validate: input => {
                    if (input === "") {
                        return "Please enter a first name."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter employee's last name.",
                validate: input => {
                    if (input === "") {
                        return "Please enter a last name."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then(async function(answer) {
            let firstName = answer.firstName;
            let lastName = answer.lastName;
            let roles = [];
            let roleIds = [];
            let managers = [];
            let managerIds = [];
            let roleData = await queryRoles();
            roleData.forEach(element => {
                roles.push(element.title);
                roleIds.push(element.id);
            });
            roles.push("None");
            roleIds.push(null)
            let managerData = await queryEmployees();
            managerData.forEach(element => {
                let fullName = element.first_name + " " + element.last_name;
                managers.push(fullName);
                managerIds.push(element.id);
            })
            managers.push("None");
            managerIds.push(null);

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "role",
                        message: "Please select a role for this employee.",
                        choices: roles
                    },
                    {
                        type: "list",
                        name: "manager",
                        message: "Please select a manager for this employee.",
                        choices: managers
                    }
                ])
                .then(async function(answer) {
                    let index = roles.indexOf(answer.role);
                    let roleId = roleIds[index];
                    index = managers.indexOf(answer.manager);
                    let managerId = managerIds[index];
                    let data = await addEmployee(firstName, lastName, roleId, managerId);
                    console.log(data.message);
                    mainMenu();
                }); 
        });
};

module.exports = mainMenu;