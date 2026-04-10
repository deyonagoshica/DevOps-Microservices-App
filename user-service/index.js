const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json({
        service: "User Service - DEV BRANCH",
        status: "Running",
        users: ["Alice", "Bob", "Charlie"]
    });
});

app.listen(3001, () => {
    console.log("User Service running on port 3001");
});