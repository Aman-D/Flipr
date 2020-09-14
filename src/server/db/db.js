var mysql = require("mysql");
/**
 * Replace the parameters value to connect to your database
 */
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "dhurweyaman",
  database: "flipr",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = connection;
