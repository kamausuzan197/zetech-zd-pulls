const express = require("express")
const router = express.Router()

//login

router.get('/login', (req, res) =>{
    res.send('login')
})

//register

router.get('/register', (req, res) =>{
    res.send('register')
})

//register handle
router.post('/register',(req, res)=>{
    console.log(req.body.form)
    const { fname, sname, pass, cpass } = req.body
    let errors = []

    //form validation
    if(fname === '' || sname === '' || !pass || !cpass){
        errors.push({ msg:'Please fill in all fields' })
    }

    //check password match
    if(pass != cpass){
        errors.push({ msg:'password do not match' })
    }

    //check legth
    // if(pass.value.length < 6){
    //     errors.push({ msg:"password should atleast be more than six" })
    // }
    if(errors > 0){
        res.render('register',{
            fname,
            sname,
            pass,
            cpass
        })
    }else{
        res.send('pass')
    }
})

module.exports = router