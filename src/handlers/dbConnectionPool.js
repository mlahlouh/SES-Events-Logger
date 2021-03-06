const mysql = require('promise-mysql')
const dbConfig = {
  connectionLimit: 500,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
  multipleStatements: true
}

module.exports = async () => {
  const pool = await mysql.createPool(dbConfig)
  return new Promise((resolve, reject) => {
    pool.getConnection().then(function (con) {
      if (con) {
        resolve(con)
      }
    }).catch(function (err) {
      reject(err)
    })
  })
}
