import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import bookRoutes from "./routes/book.routes.js";
import loanRoutes from "./routes/loan.routes.js";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

app.use("/api", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loan", loanRoutes);

export default app;
