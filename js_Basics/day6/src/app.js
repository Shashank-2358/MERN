import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/about", (req, res) => {
    res.send("About");
})

export default app;