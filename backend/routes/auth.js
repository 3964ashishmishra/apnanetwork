const express = require('express');
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res) => {

    const {
        email,
        name,
        username,
        password
    } = req.body;
    //  const email = req.body.email

    if (!email || !name || !username || !password) {
       return res.status(422).json({msg:"Please fill all the fields"});
    } else {

        User.findOne({
            $or: [{
                email: email
            }, {
                username: username
            }]
        }).then((userSaved) => {
            
            if (userSaved) {
                return res.status(422).json({msg:"User already exists with this email id or username"});
            } 

                bcrypt.hash(password, 12).then((hashedpassword) => {

                    const user = new User({
                        email,
                        name,
                        username,
                        password: hashedpassword
                    })

                    user.save()
                        .then(user => {
                            res.status(200).json({msg:"Registered successfully"})
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

        })



    }


})

router.post('/signin',async (req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(422).json({msg:"Please fill all the fields"});
    }else{

        const myuser = await User.findOne({email:email});
    
        if(!myuser){
            return res.status(422).json({msg:"Email is not valid"});
        }
    
        const savedUser = await bcrypt.compare(password,myuser.password);
    
        if(!savedUser){
            return res.status(422).json({msg:"Password not matched"});
        }else{
            res.json({msg:"Signedin successfully"});
        }

    }




})

module.exports = router;