const express = require('express');
const app = express();
const port = 3000;

function logRequestDetails(req, res, next){
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    next();
}

app.use(logRequestDetails);

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})