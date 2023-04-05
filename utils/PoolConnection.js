const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'facebook',
    user: 'root',
    password: '2671999'
})

module.exports = pool;
