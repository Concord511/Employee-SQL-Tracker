const mainPrompt = require('./utils/prompts/inquirerPrompts');
const db = require('./db/connections');

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("\nYou are connected to the 'employees' database.\n");
    mainPrompt();
});