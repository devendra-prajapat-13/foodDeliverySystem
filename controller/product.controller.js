import Product from "../model/product.model.js";

export const saveInBulk = async (request,response,next)=>{
   try{ 
    let productList = request.body;
    for(let product of productList){
        await Product.create(product);
    }
    return response.status(201).json({message: "All product saved.."});
   }
   catch(err){
    console.log(err);
   } 
}

export const getProductById = (request,response,next)=>{
   Product.findById(request.params.productId)
   .then(result=>{
     console.log(result[0]);
     return response.render("view-more.ejs",{isLoggedIn: request.session.isLoggedIn,product:result[0],currentUser: request.session.currentUser});
   }).catch(err=>{
    console.log(err);
   });  

}

export const buyNowPage = async(request,response,next)=>{
   try{ 
    let result = await Product.findById(request.params.productId);
    let product = result[0];
    console.log(product);
    return response.render("orderNow.ejs",{isLoggedIn: request.session.isLoggedIn,currentUser: request.session.currentUser});
   }
   catch(err){
    console.log(err);
    
   }
}


export const SearchItem = async (request, response, next) => {
  try {
    const { productName } = request.params;
    const result = await Product.findByName(productName);

    if (!result.length) {
      return response.render("notFound.ejs", {
        isLoggedIn: request.session.isLoggedIn,currentUser: request.session.currentUser,message: `No product found with name "${productName}"`,
      });
    }

    return response.render("searchItem.ejs", { isLoggedIn: request.session.isLoggedIn,product: result[0],currentUser: request.session.currentUser,});
  }catch (err){
    console.log(err);
    return response.status(500).send("Internal Server Error");
  }
};