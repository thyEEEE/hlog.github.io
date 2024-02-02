const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static("."));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Example app listening on port ${PORT}`)
})