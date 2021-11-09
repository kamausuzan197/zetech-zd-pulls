const express = require("express")
const cors = require("cors")
const path = require("path")
const moongose = require("mongoose")

//db config
const db = require('./config/keys').MongoURI

//connect
moongose.connect(db, { useNewUrlParser:true })
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err))
//app
const app = express()

//set routes
const finance = require("./routes/finance")
const library = require("./routes/library")
const president = require("./routes/president")
const index = require("./routes/index")
const user = require("./routes/users")
// const bodyParser = require("body-parser")


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
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//cors
app.use(cors())
app.use("/users", user)
app.use("/pages/finance", finance)
app.use("/pages/library", library)
app.use("/pages/president", president)
app.use("/", index)

//port
const port = 3000

//server
app.listen(port, () => console.log(`server running on ${port}`))