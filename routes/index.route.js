import express from 'express';
import { indexPage, signUpPage  , signInPage , aboutPage , menuPage } from '../controller/index.controller.js';
const router = express.Router();

router.get("/", indexPage);
router.get("/signUp", signUpPage);
router.get("/signIn" , signInPage);
router.get("/about" ,aboutPage);
router.get("/menu" , menuPage);
export default router;