import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
} from "../controllers/book.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

//Protected routes - Use a middleware to corroborate after finishing http request
router.get("/", authRequired, getAllBooks);
router.get("/:id", authRequired, getBookById);
router.post("/add_book", authRequired, addBook);

export default router;
