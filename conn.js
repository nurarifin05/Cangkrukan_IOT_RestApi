var  mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.0.115",
    port: "3306",
    user: "root",
    password: "enter_password_here",
    database: "rfid_reader"
});
con.connect(function(err){
    if(err) throw err;
});
module.exports = con;