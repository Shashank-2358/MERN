import { Worker } from "bullmq";
import { connection } from "./queue.js";

const worker = new Worker("emails", async (job) => {
    console.log("processing email job..", job.id, job.name, job.data);
    (await new Promise((resolve) => setTimeout(resolve, 2000)));
    console.log("email job processed successfully", job.id, job.name, job.data);
}, { connection });


worker.on("completed", (job) => {
    console.log("job completed", job.id, job.name, job.data);
})

worker.on("failed", (job, error) => {
    console.log("job failed", job.id, job.name, job.data, error.message);
})
