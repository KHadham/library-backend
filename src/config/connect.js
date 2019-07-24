require('dotenv').config()
const sql = require('mysql')

const connect = sql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : `${process.env.DB_PASS}`,
    database    : process.env.DB_NAME,
})

connect.connect((err) => {
    if (err) {
        throw err
    }
})

module.exports = connect