const express = require('express');

const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});


app.get('/error', (req, res) => {
    throw new Error('Something went wrong!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
