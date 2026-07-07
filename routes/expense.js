const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseControllers");

const { checkForAuthentication } = require("../middleware/authMiddlewares")

router.post("/expenses", checkForAuthentication, expenseController.postExpense);

module.exports = router;