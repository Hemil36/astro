const express = require("express");
var path = require("path");
const bodyParser=require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(express.static('/'));
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(__dirname + '/public'));
app.get("/",async(req,res)=>{
    
    res.render("team.ejs")
   
})
app.listen(port,()=>{
    console.log("ok");
})