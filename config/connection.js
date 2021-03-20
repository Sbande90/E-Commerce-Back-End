var mysql = require("mysql");
var connection;
if(!process.env.NODE_ENV || process.env.NODE_ENV=="development"){
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password1",
        database: "burgers_db"
      });
}else{
    connection = mysql.createConnection({
        host: "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "ppdoplcm9k496yc4",
        password: "jymanujc081gjw00",
        database: "uqjr761tzn868n4r"
      });
}

 

    // Make connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;