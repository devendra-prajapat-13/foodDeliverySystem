import mysql from 'mysql2';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "PHW#84#jeor",
  database: "expressapp"
});

export default pool;