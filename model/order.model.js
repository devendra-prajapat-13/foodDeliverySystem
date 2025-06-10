import pool from "../Database/dbconfig.js";

class Order {

     constructor (name , phone , address)
     {
        this.name = name;
        this.phone = phone;
        this.address = address;
     }
     
    saveOrder() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (err) return reject(err);

        const sql = "INSERT INTO orders(name, phone, address) VALUES (?, ?, ?)";
        con.query(sql, [this.name, this.phone, this.address], (err, result) => {
          con.release();
          return err ? reject(err) : resolve(result);
        });
      });
    });
  }
    
}

export default Order;