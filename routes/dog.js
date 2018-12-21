'use strict'; 

const express = require('express'); 
const dogQueue = require('../data/dogs'); 
const Queue = require('../data/queue'); 
const router = express.Router(); 

router.get('/', (req, res, next)=>{
  return res.json(dogQueue.peek()); 
});



module.exports=router; 