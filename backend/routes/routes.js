const express = require('express');
const router = express.Router();
const SignupTemplateCopy = require('../models/SignUpModel');
const asyncHandler = require('express-async-handler');


router.post('/signup',asyncHandler(async (req,res) =>{

    const {username,email,age} = req.body;

    try {

        const signedUpUser = await SignupTemplateCopy.findOne({email})

        if(signedUpUser){

        return  res.status(400).json({message:'User already exists!'})
    
        }

       const user = await SignupTemplateCopy.create({
        username,
        email,
        age
    })

    res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:'Something went wrong...'})
    }
   
}))


router.get('/getusers', asyncHandler(async (req,res) =>{
     
    
     try {

        const users = await SignupTemplateCopy.find({})
        const newArr =  users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
    
        //throw new Error('yeah');
        
        res.status(200).json(newArr)
           
        
    } catch (error) {
        res.status(500).json({message:'Something went wrong...'})
    }
}))


module.exports = router;