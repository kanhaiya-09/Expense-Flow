const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
            timestamps: true,
    }
)

module.model.exports = mongoose.model("Expense", expenseSchema)