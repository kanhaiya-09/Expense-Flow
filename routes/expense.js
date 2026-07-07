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

module.exports = router;