import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("main");
});

app.listen(3000, () => {
    console.log("success, listening on port 3000");
});
