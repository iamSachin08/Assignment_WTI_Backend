var mysql=require('mysql');
var pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sachin@189253',
    database:'clientwti',
    multipleStatements:true,
    connectionLimit:100
})
module.exports=pool;