const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;


app.use(express.json());


const validatePayload = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


const payloadValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email address'),
    ];
};


app.post('/api/endpoint', payloadValidationRules(), validatePayload, (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Hello, ${name}! Your email is ${email}.` });
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
