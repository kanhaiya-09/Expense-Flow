const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseControllers");

const { checkForAuthentication } = require("../middleware/authMiddlewares")

router.post("/expenses", checkForAuthentication, expenseController.postExpense);
router.post(
    "/expenses/delete/:id",
    checkForAuthentication,
    expenseController.deleteExpense
);

router.get("/expenses/:id/edit", checkForAuthentication, expenseController.showEditExpense)
router.post("/expenses/:id", checkForAuthentication, expenseController.updateExpense)

module.exports = router;