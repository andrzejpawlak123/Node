const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
host : 'localhost',
user:  'root',
password: 'pass'
});

db.connect((err)=>{

    console.log('mysql connect..');


db.query("CREATE DATABASE dbexample", function (err, result) {
    if (err)throw err;
    console.log("Database created");
    console.log(result);
    
  });
});


const app = express();



app.listen('8080',()=>{
console.log('Server listen on port 8080');

})


