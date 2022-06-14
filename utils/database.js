/**
 * @author Dominic
 * @email Dominic.s@skeintech.com
 * @create date 2021-01-11 
 * @modify date 2021-01-23 
 * @desc [description]
 */

var mysql = require('mysql2');


 /**
  * Dot env configuration
  */
 

 var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud'
});

// check db connection 
db.connect((err)=>{
    if(err) throw err;
    else
    {
        console.log('database connected ....');
    }
});
 
 
 
 module.exports = db
 
 module.exports.transactions = {
     async beginTransaction() {
         await db.promise().query('START TRANSACTION; SET AUTOCOMMIT = 0');
 
     },
 
     async commit() {
         await db.promise().query('COMMIT; SET AUTOCOMMIT = 1');
     },
 
     async rollback() {
         await db.promise().query('ROLLBACK; SET AUTOCOMMIT = 1');
 
     }
 
 }
 