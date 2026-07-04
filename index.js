const express = require("express")
const app = express()
const PORT = 8003
app.set("view engine", "ejs")
app.use(express.static('public')); // To serve static files


app.get("/", (req, res) => {
    res.render('home', {
        title: "Home",
        username: "Kanhaiya",
        projectName: "Expense Flow",
    }) 
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})