import Order  from "../model/order.model.js";

export const orderNow = (req, res, next) => {
  let { name, phone, address } = req.body;
  let order = new Order(name, phone, address);

  order.saveOrder().then(result => {
    return res.render("orderSuccefull.ejs");

//    console.log("Order save in databases");
  }).catch(err => {
    console.error(err);
    res.send(err);
    // console.log("order is not saved ");
});

}