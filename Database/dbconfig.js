import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password:process.env.Password,
  database:process.env.Database
});

export default pool;



