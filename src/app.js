require('dotenv').config();

const express = require("express")
const http = require("http");
const socketIo = require("socket.io");
const db = require("./utils/db.js");
const path = require('path');

const app = express();
const server = http.createServer(app)
const io = socketIo(server)

// app.use(express.static(path.join(__dirname, "/public")))
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("he")
})

db()
.then(() => {
    server.listen(process.env.PORT);
    console.log(`Server is listening at: ${process.env.PORT}`)
})