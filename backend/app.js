import express from "express";

const app = express(); //create an express app

//routes import
// import userRouter from "./routes/user.route.js";
// import postRouter from "./routes/post.route.js";
// import postRouter from "./routes/post.route.js";
app.use(express.json());

export default app;
