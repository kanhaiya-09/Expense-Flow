const express = require("express")
const app = express()
const PORT = 8003
app.set("view engine", "ejs")

require("dotenv").config();

//Routes
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
const expenseRouter = require("./routes/expense");


// Middlewares
app.use(express.static('public')); // To serve static files
app.use(express.urlencoded({
    extended:false
})) //Body Parser Middleware

// Cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/", expenseRouter);



//Connection MongoDB
const connectMongoDB = require("./config/db");

// Database
connectMongoDB();

// Server
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})