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
module.exports = {
    getHomePage,
    
}