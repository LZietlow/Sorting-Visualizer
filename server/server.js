const express = require("express");
const app = express();

app.listen(8000);


app.post("/test", (req, res) => {
    res.send("Hello World");
    console.log("test")
})
