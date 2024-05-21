const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const usersphone = [];
const userspassword = [];

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/api/login', (req, res) => {
    const passwordStrength = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
    const phoneRegex = /^\+\d{11}$/;
    const { phone, password } = req.body;

    const response = {
        responsePassword: passwordStrength.test(password),
        responsePhone: phoneRegex.test(phone)
    };

    if (phone === "admin" && password === "admin") {
        return res.json({ responseAdmin: true });
    }

    usersphone.push(phone);
    userspassword.push(password);
    console.log('телефон', usersphone, 'пароль', userspassword);

    res.json(response);
});

app.get('/api/admin', (req, res) => {
    res.json({ usersphone,userspassword });
});

app.get('/api/movie', (req, res) => {
    const movies = ["1 фильм", "2 фильм", "3 фильм", "4 фильм", "5 фильм", "6 фильм"];
    res.json({ movies });
});
