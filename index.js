require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.DEV_PORT

app.get("/api", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, ()=> {
    console.log("listening to port:" + PORT)
})