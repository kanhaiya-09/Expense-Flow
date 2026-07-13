const Expense = require("../models/expenseModel");

async function getHomePage(req, res){
    try {
        const expenses = await Expense.find({
            createdBy: req.user._id,
        });

        return res.render("home", {
            expenses,
        });

    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
}

const Expense = require("../models/expenseModel");

async function handleHome(req, res) {
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

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getHomePage,
    handleHome,
}