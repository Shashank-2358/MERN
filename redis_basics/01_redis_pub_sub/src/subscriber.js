import Redis from 'ioredis';

console.log("Subscriber started");

const subscriber = new Redis('redis://localhost:6379');

subscriber.on('connect', () => {
    console.log('Connected to Redis');
});

subscriber.on('ready', () => {
    console.log('Redis Ready');
});

subscriber.on('error', (err) => {
    console.error('Redis Error:', err);
});

subscriber.subscribe('notifications', (err) => {
    if (err) {
        console.error('Subscribe Error:', err);
        return;
    }

    console.log('Subscribed to notifications channel');
});

subscriber.on('message', (channel, message)=>{ console.log("Reciever on",channel,":", JSON.parse(message)); })