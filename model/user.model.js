import pool from "../Database/dbconfig.js";

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static find(email , password)
  {
     return new Promise((resolve,reject)=>{
          pool.getConnection((err , con)=>{
             if(!err){
                let sql = "select * from users where email = ? and password = ?";
                con.query(sql,[email, password],(err,result)=>{
                    con.release();
                    err?reject(err):resolve(result);
                })
             }
             else{
                reject(err);
             }
          })
     })
  } 

  static hasEmail(email)
  {
      return new Promise((resolve , reject)=>{
         pool.getConnection((err , con)=>{
             if(!err)
             {
                 let sql = "select * from  users where email = ?";
                 con.query(sql , [email],(err,result)=>{
                    con.release();
                    err?reject(err):resolve(result);
                 })
             }
             else{
                reject(err);    
             }
         })
      })
  }

  create() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => { 
        if (err) return reject(err);

        const sql = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";
        con.query(sql, [this.name, this.email, this.password], (err, result) => {
          con.release();
          return err ? reject(err) : resolve(result);
        });
      });
    });
  }
}

export default User;