import pool from "../Database/dbconfig.js";

class Product{

       constructor(id , name ,  prepTimeMinutes,cookTimeMinutes,cuisine,caloriesPerServing,reviewCount, rating, image,price)
       {
            this.id = id;
            this.name = name;
            this.prepTimeMinutes = prepTimeMinutes;
            this.cookTimeMinutes = cookTimeMinutes;
            this.cuisine = cuisine;
            this.caloriesPerServing = caloriesPerServing;
            this.reviewCount = reviewCount;
            this.rating = rating;
            this.image = image;
            this.price = price;
       }

       static create(product)
       {
          return new Promise((resolve , reject)=>{
               pool.getConnection((err , con)=>{
                    if(!err)
                    {
                         let sql = "insert into product(id , name ,  prepTimeMinutes,cookTimeMinutes,cuisine,caloriesPerServing,reviewCount, rating, image,price) values(?,?,?,?,?,?,?,?,?,?)";
                         con.query(sql ,[product.id,product.name,product.prepTimeMinutes,product.cookTimeMinutes,product.cuisine,product.caloriesPerServing,product.reviewCount,product.rating,product.image,product.price],(err,result)=>{
                           con.release();
                           err?reject(err):resolve(result);
                        });
                    }
                    else
                    {
                       reject (err);
                    } 
               })
          })
       }

       static findAll(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               let sql = "select * from product";
               con.query(sql,(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               }) 
            });
        });
    }


     static findById(productId){
      return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               let sql = "select * from product where id = ?";
               con.query(sql,[productId*1],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }
   
  static findByName(productName) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (err) return reject(err);
        const sql = "SELECT * FROM product WHERE name = ?";
        con.query(sql, [productName], (err, result) => {
          con.release();
          err ? reject(err) : resolve(result);
        });
      });
    });
  }
    
}



export default Product;
