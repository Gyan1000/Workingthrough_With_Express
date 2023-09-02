const express = require('express');

const app = express();

const hostname = "localhost";
const port = 3005;
let count = 1;
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.send({ counter: count });
})
app.get('/increment', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send({ counter: ++count });
})
app.get('/decrement', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send({ counter: --count });
})


app.listen(port, () => {
    console.log(`Server is running at ${hostname}:${port}`);
})