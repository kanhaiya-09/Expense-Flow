const Expense = require("../models/expenseModel")

async function postExpense(req, res){
    try{
        const { amount, category, description } = req.body;

        // Validation
        if(!amount || !category || !description){
            return res.status(400).send("All fields are required")
        }

        // Create expense
        const expense = new Expense({
            amount,
            category,
            description,
            createdBy: req.user._id,
        });

        //Save to DB
        await expense.save();

        return res.redirect("/");
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
} 


module.exports = { postExpense }