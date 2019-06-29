require('dotenv').config()
const sql = require('mysql')

const connect = sql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USERNAME,
    password    : `${process.env.DB_PASSWORD}`,
    database    : process.env.DB_NAME,
})

connect.connect((err) => {
    if (err) {
        throw err
    }
})

module.exports = connect