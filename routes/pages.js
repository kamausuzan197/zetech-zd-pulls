const exprees = require('express')
const router = exprees.Router()

//library
router.get('/library', (req, res)=>{
    res.render('library')
})

//campaigns
router.get('/campaigns', (req, res)=>{
    res.render('campaigns')
})

//president
router.get('/president', (req, res)=>{
    res.render('president')
})

//finance
router.get('/finance', (req, res)=>{
    res.render('finance')
})
router.post("/finance", (req, res) =>{
    pusher.trigger("zt-poll", "zt-vote", {
        points:1,
        zt:req.body.zt
    });
    return res.json({success:true, message:'thank you for voting'})
})
module.exports = router