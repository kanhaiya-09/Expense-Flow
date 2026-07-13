const Expense = require("../models/expenseModel");

async function getHomePage(req, res){
    try {
        const expenses = await Expense.find({
            createdBy: req.user._id,
        });

        const totalExpenses = expenses.reduce(
            (total, expense) => total + expense.amount,
            0
        );

        return res.render("home", {
            expenses,
            totalExpenses,
        });

    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
}




module.exports = {
    getHomePage,
}