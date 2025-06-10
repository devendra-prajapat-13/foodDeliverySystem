import express from "express";
import { orderNow } from "../controller/order.controller.js";

const router = express.Router();

router.post("/orderNow" , orderNow);

export default router