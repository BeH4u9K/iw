const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { phone, password } = req.body;
    const phoneRegex = /^\+\d{11}$/;
    if (!phoneRegex.test(phone)) {
        res.json({ responseInfo: false });
    } else {
        res.json({ responseInfo: true });
    }
});

app.get('/api/movie', (req, res) => {
    const movies = ["1 фильм", "2 фильм","3 фильм","4 фильм","5 фильм","6 фильм"];
    res.json({ movies });
})