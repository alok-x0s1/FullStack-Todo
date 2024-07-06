import express from "express";
import cookieParser from "cookie-parser";
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Imports
import userRouter from "../routes/user.route.js"
import todoRouter from "../routes/todo.route.js"

// Routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/todos", todoRouter)

export { app };