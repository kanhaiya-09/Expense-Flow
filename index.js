const express = require("express")
const app = express()
const PORT = 8003

const homeRouter = require("./routes/home");

app.set("view engine", "ejs")
app.use(express.static('public')); // To serve static files

app.use("/", homeRouter);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})