const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

//app
const app = express()

//set routes
const president = require("./routes/president")
const index = require("./routes/index")

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
app.get("/pages/campaign.html", function(req, res){
    res.sendFile(path.join(__dirname,"/pages/campaign.html"))
})

//body parser midleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//cors
app.use(cors())
app.use("/pages/president", president)
app.use("/index", index)

//port
const port = 3000

//server
app.listen(port, () => console.log(`server running on ${port}`))