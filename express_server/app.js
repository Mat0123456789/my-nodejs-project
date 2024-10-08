import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("<H1>Hello, World</H1>");
});

app.get("/contact", (req, res) => {
    res.send("My contact is jjjmmm");
});

app.get("/user", (req, res) => {
    res.send("My user is Jiramata");
});

app.listen(3000, ()=> {
    console.log('Server running on port 3000');
});