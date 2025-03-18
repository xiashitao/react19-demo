const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/users/:id", (req, res) => {
    res.json({ name: "John Doe", email: "john.doe@example.com", id: req.params.id });
});

app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    setTimeout(() => {
        const results = Array.from({ length: 10 }, (_, index) => `${keyword}${index + 1}`);
        res.json(results);
    }, 1000);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
