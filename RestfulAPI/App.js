const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


let users = [
    { id: 1, name: 'Ravi', email: 'ravi@gmail.com' },
    { id: 2, name: 'chandran', email: 'chandran@gmail.com' }
];


app.use(bodyParser.json());


app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;

    users = users.map(user => {
        if (user.id === userId) {
            return { ...user, ...updateUser };
        }
        return user;
    });

    res.json(users.find(user => user.id === userId));
});


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    users = users.filter(user => user.id !== userId);

    res.status(204).end();
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
