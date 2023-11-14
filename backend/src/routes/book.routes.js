import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
} from "../controllers/book.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

//Protected routes - Use a middleware to corroborate after finishing http request
router.get("/profile", authRequired, profile);
router.get("/", authRequired, getAllBooks);
router.get("/book:id", authRequired, getBookById);
router.get("/add_book", authRequired, addBook);

export default router;
