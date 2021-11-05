const express = require("express")
const router = express.Router()

const Pusher = require("pusher");

let pusher = new Pusher({
  appId: "1272131",
  key: "5eebcaa203111be8fb46",
  secret: "07bc03ca2b5887b9804d",
  cluster: "ap2",
  useTLS: true,
});

router.get("/", (req, res) =>{
    res.send("president")
})

router.post("/", (req, res) =>{
    pusher.trigger("zt-poll", "zt-vote", {
        points:1,
        zt:req.body.zt
    });
    return res.json({success:true, message:'thank you for voting'})
})

module.exports = router