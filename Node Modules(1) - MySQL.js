//USING MYSQL MODULE
//Requiring
const mysql = require("mysql");

//Create Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "d"
});

//Execute Query
connection.query(`SELECT * FROM d.${tableName} t WHERE t.${columnName} = "${columnData}"`, function (error, result) {
    if (error) {
        throw error;
    } else {
        console.log(result);
    }
});

//Execute A Return Function Using Promises
class UserDAO {
    static async getUserByUsername(username) {
        return new Promise(function (resolve, reject) {
            connection.query(`
                SELECT *
                FROM d.user u
                WHERE u.userName = "${username}"
            `, function (error, result) {
                    if (error) {
                        reject(error.message);
                    } else {
                        resolve(result);
                    }
                });
        });
    }
}