const express = require("express")
const app = express()
const PORT = 8003

app.get("/", (req, res) => {
    return res.send("Welcome to Expense Flow")
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})