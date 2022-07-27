const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const data  = require("./db.json");

app.use(cors())

app.get("/" , (req,res) => {
    res.send("Hello world!!")
})

app.get("/service" , (req,res) => {
    res.status(200).json({ data })
})

app.listen(PORT , () => {
    console.log("server started !!");
})