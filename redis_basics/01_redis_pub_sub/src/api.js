import express from 'express';
import redis from 'ioredis';

const app = express();
app.use(express.json());

const publisher = new redis(process.env.REDIS_URL || 'redis://localhost:6379');
console.log("api file started");

app.post('/notifications', async (req, res) => {
    const payload = {
        title : req.body.title || 'Default Title',
        createdAt : new Date().toISOString(),
    }
    const recipient = await publisher.publish('notifications', JSON.stringify(payload));
    res.status(201).json({ message: 'Notification sent', recipient });
});

console.log("api file ended");
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});