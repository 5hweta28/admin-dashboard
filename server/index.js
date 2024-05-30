const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
    user: 'root1',
    host: 'localhost',
    password: 'dream123',
    database: 'plantdb'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

app.post('/register', (req, res) => {
    const { setEmail: sentEmail, setUserName: sentUserName, setPassword: sentPassword } = req.body;
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    const Values = [sentEmail, sentUserName, sentPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send({ error: err });
            return;
        }
        console.log('User inserted successfully');
        res.send({ message: 'User added!' });
    });
});

app.post('/login', (req, res) => {
    const { setUserName: sentLoginUserName, setPassword: setLoginPassword } = req.body;
    const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const Values = [sentLoginUserName, setLoginPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send({ error: err });
            return;
        }
        if (results.length > 0) {
            res.send(results);
        } else {
            res.send({ message: 'Credentials Don\'t Match!' });
        }
    });
});
