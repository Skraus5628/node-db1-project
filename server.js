const express = require('express');
const accountRouter =require('./accounts/accountRoutes');
const db = require('./data/dbConfig.js');
const server = express();
server.use(express.json());
server.get("/", (req, res) =>{
    res.json({ message: "We're all mad here..."})
})

server.use("/accounts", accountRouter);





module.exports = server;