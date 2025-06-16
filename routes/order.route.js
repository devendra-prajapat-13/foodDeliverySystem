import express from "express";
import { orderNow , OrderButton} from "../controller/order.controller.js";

const router = express.Router();

router.post("/orderNow" , orderNow);
router.get("/orderButton" , OrderButton);

export default router