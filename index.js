const express = require("express")
const app = express()
const PORT = 8003
app.set("view engine", "ejs")

require("dotenv").config();

//Routes
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");


//Connection MongoDB
const connectMongoDB = require("./config/db");

// Middlewares
app.use(express.static('public')); // To serve static files
app.use(express.urlencoded({
    extended:false
})) //Body Parser Middleware


app.use("/", homeRouter);
app.use("/", authRouter)


// Database
connectMongoDB();

// Server
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})