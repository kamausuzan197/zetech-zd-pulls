const express = require("express")
const router = express.Router()

const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1287131",
    key: "3a6a58dc11a8d051d8fd",
    secret: "41ba2a238032f9b93074",
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