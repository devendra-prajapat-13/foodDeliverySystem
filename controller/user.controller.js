import User from "../model/user.model.js";

export const signup = (req, res, next) => {
  let { name, email, password } = req.body;
  let user = new User(name, email, password);

  user.create().then(result => {
    return res.redirect("/signIn"); 
  }).catch(err => {
    console.error(err);
    res.send("already signUp with is email");
});

}

export const checkForEmail = (request , response , next)=>{
    User.hasEmail(request.params.emailID)
    .then(result=>{
       if(result.length)
       {
          return response.status(200).json({status:true,message: "email id is already taken"});
       }
       else
       {
          return response.status(200).json({status:false,message:"available"});
       }
    }).catch(err=>{
      console.log(err);
    });
}

export const signIn = (req , res , next)=>{
    let {email , password} = req.body;
    User.find(email,password)
    .then(result=>{
       if(result.length)
       {
         console.log(result);
         req.session.isLoggedIn = true;
         req.session.currentUser = result[0];
         return res.redirect("/");
       }
       else
       {
         return res.redirect("/signin");
       }
    }).catch(err=>{
        return res.end("Something went wrong....");
    })
}


export const signOut = (request,response,next)=>{
   request.session.isLoggedIn = false;
   request.session.currentUser = null;
   request.session.destroy();
   return response.redirect("/");
}