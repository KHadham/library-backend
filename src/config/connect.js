require('dotenv').config()
const sql = require('mysql')

// const connect = sql.createConnection({
//     host        : process.env.DB_HOST,
//     user        : process.env.DB_USER,
//     password    : `${process.env.DB_PASS}`,
//     database    : process.env.DB_NAME,
// })
const connect = sql.createConnection({
    host        : 'remotemysql.com',
    user        : 'nqNstFQxSs',
    password    : 'G0GwB8VvpH',
    database    : 'nqNstFQxSs',
})
connect.connect((err) => {
    if (err) {
        throw err
    }
})
// Username: nqNstFQxSs

// Database name: nqNstFQxSs

// Password: G0GwB8VvpH

// Server: remotemysql.com

// Port: 3306

module.exports = connect