const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/schedule', (req, res) => {
    console.log("hello world")
    res.sendFile(__dirname + "/schedule.html");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/blog/my-first-blog', (req, res) => {
    res.sendFile(__dirname + "/blog/my-first-blog.html");
});

app.use(express.static("."));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Example app listening on port ${PORT}`);
});