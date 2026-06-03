import express from "express";
import { emailQueue } from "./queue.js";

const app = express();
app.use(express.json());

app.post("/welcome-email", async (req, res) => {
    const job = await emailQueue.add("send-Welcome-Email",
        {
            to: req.body.to,
            name: req.body.name || "user",
        }, {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 1000
        }
    });

    res.status(200).json({ message: "Email job addededed successfully", jobId: job.id });

})


app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
})