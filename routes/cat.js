const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


router.get('/', (req, res) => {
    res.json(cats);
});
const cats = [
    {
        imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
    }
]
module.exports = router;