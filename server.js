const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

let users = [];

app.get('/', (req, res) => {
    res.send(`
        <h2>Simple User App</h2>
        <form method="POST" action="/register">
            <input name="username" placeholder="Username" />
            <input name="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
        <br/>
        <a href="/users">View Users</a>
    `);
});

app.post('/register', (req, res) => {
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users', (req, res) => {
    let list = users.map(user => `<li>${user.username}</li>`).join('');
    res.send(`<h2>Registered Users</h2><ul>${list}</ul><a href="/">Back</a>`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
