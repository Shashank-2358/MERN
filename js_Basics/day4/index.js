const express = require('express');
const app = express();
// Default 3001 so day3 (or anything on 3000) does not block this server.
// Override: PowerShell  $env:PORT=3000; npm start
const PORT = Number(process.env.PORT) || 3001;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
    console.log('Hello World');
});

const server = app.listen(PORT);

server.on('listening', () => {
    const addr = server.address();
    const p = typeof addr === 'object' && addr ? addr.port : PORT;
    console.log(`Server running at http://localhost:${p}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(
            `Port ${PORT} is in use. From the day4 folder try: $env:PORT=3002; npm start`
        );
    } else {
        console.error(err);
    }
    process.exit(1);
});