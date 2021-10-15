const express = require("express")
const path = require("path")

//app
const app = express()

//set a public directory
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static(path.join(__dirname,"sass")))

//views
app.get("/pages/president.html",function(req, res){
    res.sendFile(path.join(__dirname,"/pages/president.html"))
})
app.get("/pages/library.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/library.html"))
})
app.get("/pages/finance.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/finance.html"))
})
app.get("/pages/security.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/security.html"))
})
app.get("/pages/sport.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/sport.html"))
})
app.get("/pages/campaign.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/campaign.html"))
})
