var mysql = require("mysql");
/**
 * Replace the parameters value to connect to your database
 */
var connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12365544",
  password: "naNU5YyXQv",
  database: "sql12365544",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = connection;
