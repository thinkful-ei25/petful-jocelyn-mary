'use strict'; 
const {Queue} = require('../data/queue'); 
const cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Gatoski',
    sex: 'Male',
    age: 2,
    breed: '????',
    story: 'Stop he is mine'
  }
]; 
const catsQueue = new Queue(); 
for(let i=0; i<cats.length; i++){
  catsQueue.enQueue(cats[i]); 
}
module.exports = catsQueue; 