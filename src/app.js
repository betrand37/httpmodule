const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("hello world from node")
})

app.listen(3000, () => {
    console.log(`Server is currently running on localhost:${3000}`)
})