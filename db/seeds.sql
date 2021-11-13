/* Populate data for the departments table */
INSERT INTO departments (name)
VALUES
    ("Operations"),
    ("Human Resources"),
    ("IT"),
    ("Customer Service"),
    ("Quotes"),
    ("Warehouse"),
    ("Facilities");

/* Populate data for the roles table */
INSERT INTO roles (title, salary, department_id)
VALUES
    ("Operations Analyst", 65000.00, 1),
    ("Operations Manager", 100000.00, 1),
    ("Operations Admin", 45000.00, 1),
    ("Branch Manager", 150000.00, 1),
    ("Human Resources Coodinator", 50000.00, 2), 
    ("Human Resources Manager", 100000.00, 2), 
    ("Human Resources Recruiter", 60000.00, 2),
    ("Systems Technician", 55000.00, 3),
    ("Systems Technician Lead", 80000.00, 3),
    ("Customer Service Representative", 45000.00, 4),
    ("Customer Service Team Lead", 55000.00, 4),
    ("Customer Service Manager", 75000.00, 4),
    ("General Warehouse", 50000.00, 5),
    ("Warehouse Management Trainee", 60000.00, 5),
    ("Warehouse Team Lead", 65000.00, 5),
    ("Warehouse Manager", 85000.00, 5),
    ("Facilities Coordinator", 65000.00, 6),
    ("Facilities Admin", 50000.00, 6);

/* Populate data for the employees table */
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Ty", "Beucler", 4, null),
    ("Andrew", "Cooan", 2, 1),
    ("Carly", "Rindahl", 3, 2),
    ("Tom", "Westmark", 1, 2),
    ("Nicole", "Anderson", 6, 1),
    ("Kaitlin", "Kadlec", 5, 1),
    ("Kaitlin", "Valenziano-Jones", 7, 5),
    ("Brian", "Dryjanski", 7, 5),
    ("Ian", "Holmes", 8, 2),
    ("Eric", "Horne", 8, 2);


