//STARTING AN "npm" PROJECT
//Initializing The Project
//1. Navigate to the directory where you want the project to start
//2. Run the command "npm init"
//3. Fill in the required details
//4. Take a look at the "package.json" file that is created automatically

//Installing 3rd PArty Modules/Dependencies
//1. Run the command "npm install XXXX --save" ("XXXX" must be replaced with the module name)
//eg: npm install mysql --save
//2. Notice the "node_modules" directory and "package-lock.json" file that is created automatically
//3. Take a look at the "package.json" file that is updated automatically

//Requiring Modules
const fs = require("fs");
const mysql = require("mysql");

//Requiring Other JavaScript Files
//NOTE: Requiring .js files that you created is done similarly as above. We must specify the path to the requiring .js file
//NOTE: Before requiring a .js file, it must include exports
const myFile = require("scripts/controller.js");

//Exporting for Requiring
class UserDAO {

}

module.exports = {
    UserDAO
}

//Starting an "npm" project
//1. Run the command "npm start"