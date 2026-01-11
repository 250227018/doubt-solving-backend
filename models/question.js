const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);