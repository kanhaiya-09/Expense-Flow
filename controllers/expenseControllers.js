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

async function deleteExpense(req, res) {
    try {
        const expenseId = req.params.id;

        // We are using findByIdAndDelete instead of findOneAndDelete
        const deletedExpense = await Expense.findOneAndDelete({
            _id: expenseId,
            cretedBy: req.user._id,
        })
        if(!deletedExpense) {
            return res.status(404),send("Expense not found");
        }
        return res.redirect("/")
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
    }
}


async function showEditExpense(req, res){
    try{
        const expense = await Expense.findOne({
            _id: req.params.id,
            createdBy: req.user._id,
        })
        if (!expense) {
        return res.status(404).send("Expense not found");
        }
        return res.render("editExpense", {
            expense,
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error")
    }
}


async function updateExpense(req, res){
    try{

    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error")
    }
}


module.exports = {
    postExpense,
    deleteExpense,
    updateExpense,
    showEditExpense,
}