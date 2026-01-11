const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
dotenv.config();


const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/question", questionRoutes);
const PORT = process.env.PORT || 5000;

//mongodb connection
mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err))


//start server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
});

