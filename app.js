const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/posts")
const connect = require("./connection/connect")

const app = express();

app.use("",userRoutes)
app.use("",postRoutes)

app.get("/", (req, res) => {
    res.send("Everthing Is Perfect")
})

app.listen(3500, () => console.log("Server is up at 3500 port"))