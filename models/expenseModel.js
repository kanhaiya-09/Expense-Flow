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
            // The value stored in this field will be an ObjectId.
            ref: "User",
            // This ObjectId belongs to the User model.
            // The ref is used by Mongoose to understand the relationship between collections.
            required: true,
        },
    },
    {
            timestamps: true,
    }
)

module.model.exports = mongoose.model("Expense", expenseSchema)