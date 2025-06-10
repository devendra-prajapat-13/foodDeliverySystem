
import express from 'express';
import indexRouter from "./routes/index.route.js";
import userRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js";
import OrderRouter from "./routes/order.route.js";
import bodyParser from "body-parser";
import session from "express-session";
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views"); 
                                       
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'fsfjkljsfrjweirweovmvnmbvxmbvmxcvrweoruweo'
}));

app.use("/", indexRouter);
app.use("/user", userRouter); 
app.use("/product",ProductRouter);
app.use("/order" , OrderRouter );

app.listen(3000, () => {
  console.log("Server Started.....");
});

