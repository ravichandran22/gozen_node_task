const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.post('/data', (req, res) => {
    res.send('Data received Successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})