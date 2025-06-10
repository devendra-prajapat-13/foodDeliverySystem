import express from 'express';
import { signup , signIn , signOut} from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);
router.get("/signout",signOut);
// router.get("/menu" , menu);
export default router;

