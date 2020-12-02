const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const userClass = require('../logic/userLogic');
let userLogic = new userClass();
//const envFile = require('../config/config')


router.post('/api/createUser',(req,res,next)=>{
  userLogic.createUser(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})

router.post('/api/updateUser',(req,res,next)=>{
  userLogic.updateUser(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})

router.post('/api/deleteUser',(req,res,next)=>{
  userLogic.deleteUser(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})

router.get('/api/getUsers',(req,res,next)=>{
  userLogic.getAllUsers(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})

router.get('/api/getUsersByDate',(req,res,next)=>{
  userLogic.getAllUsersByDate(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})

router.get('/api/getUsersByDist',(req,res,next)=>{
  userLogic.getAllUsersByDist(req).then((response)=>{
    if(response.error){
      res.status(400).json({message:'Error',result:response.error})
    }else{
      res.status(200).json({message:'success',result:response.result})
    }
  })
})


module.exports = router;