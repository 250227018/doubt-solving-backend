const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// POST: student doubt submit kare
router.post("/ask", async (req, res) => {
    try {
        const { studentName, question } = req.body;

        const newQuestion = new Question({
            studentName,
            question,
        });

        await newQuestion.save();
        res.status(201).json({ message: "Question submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

module.exports = router;
