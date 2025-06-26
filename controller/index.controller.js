import Product from "../model/Product.model.js";

export const indexPage = (req, res, next) => {
  return res.render("index.ejs",{currentUser: req.session.currentUser,isLoggedIn: req.session.isLoggedIn});
};



export const signUpPage = (req, res, next) => {
  return res.render("signUp.ejs",);
};

export const signInPage = (request , response , next)=>{
     return response.render("signIn.ejs");
}

export const aboutPage = (req , res , next)=>{
    return res.render("aboutUs.ejs",{currentUser: req.session.currentUser,isLoggedIn: req.session.isLoggedIn});
}

export const menuPage = async(request , response , next)=>{
    let productList = await Product.findAll();
    return response.render("menu.ejs",{products: productList ,currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}

