const express = require("express");

const app = express();

const PORT = 5000;

const customMiddleWare = (req, res, next) => {
    console.log("middleware executed");
    next()
}

app.use(customMiddleWare)

app.get("/", (req, res)=>{
    console.log("HOME")
    res.send("Hello my big polish friend");
});
app.get("/about", (req, res)=>{
    console.log("about")
    res.send("about page");
});

app.listen(PORT,()=>{
    console.log("Server is running on :", PORT);
});