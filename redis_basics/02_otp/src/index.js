import express from "express";
import Redis from "ioredis";

const app = express();
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
app.use(express.json());

function otpkey(phonenumber) {
    return `otp:${phonenumber}`;
}

app.post('/otp', async (req, res) => {
    const { phonenumber } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);
    await redis.set(otpkey(phonenumber), otp, 'EX', 60);
    res.status(200).json({ message: "OTP sent successfully", otp });
})

app.post('/otp/verify', async (req, res) => {
    const { phonenumber, otp } = req.body;
    const storedOtp = await redis.get(otpkey(phonenumber));
    if (!storedOtp) {
        return res.status(400).json({ message: "OTP Expired" });
    }
    if (storedOtp != otp) {
        return res.status(400).json({ message: "Invalid OTP" });
    }
    await redis.del(otpkey(phonenumber));
    return res.status(200).json({ message: "OTP verified successfully" });
})

app.get('/otp/:phonenumber/ttl', async (req, res) => {
    const ttl = await redis.ttl(otpkey(req.params.phonenumber));
    return res.status(200).json({ ttl });
})

app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
})