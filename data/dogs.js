'use strict'; 

const {Queue} = require('../data/queue'); 

const dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Bongo',
    sex: 'Male',
    age: 3,
    breed: 'Golden Doodle',
    story: 'was too good a boi for his past fam'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
 
]; 

const dogQueue = new Queue(); 
for(let i=0; i<dogs.length; i++){
  dogQueue.enQueue(dogs[i]); 
}

module.exports = dogQueue;