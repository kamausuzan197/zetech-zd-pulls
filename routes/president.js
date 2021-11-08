const express = require("express")
const router = express.Router()

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1293041",
  key: "73c25b9d3a1ce3868a22",
  secret: "d6300c91838221fb35a3",
  cluster: "ap2",
  useTLS: true
}); 

router.get("/", (req, res) =>{
    res.send("president")
})

router.post("/", (req, res) =>{
    pusher.trigger("zt-poll", "zt-vote", {
        zt:req.body.zt,
        points:1
    });
    return res.json({
        success:true, 
        message:'thank you for voting'
    })
})

module.exports = router