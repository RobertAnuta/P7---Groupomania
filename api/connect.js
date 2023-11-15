import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'R@bert1991',
  database: 'db_groupomania'
})
