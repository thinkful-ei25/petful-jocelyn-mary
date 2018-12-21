'use strict'; 

const express = require('express');
const cats = require('../data/cats');
const Queue = require('../data/queue'); 
const catsQueue = require('../data/cats'); 

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.json(catsQueue.peek());
});

router.delete('/', (req, res, next)=>{
  catsQueue.deQueue(); 
  return res.sendStatus(204);
}); 

module.exports = router;