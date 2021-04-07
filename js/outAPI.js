const express = require('express');
const router = express.Router();
let textData = require('./textData');

router.get('/custom_text', (req, res)=>{
    res.json(textData)
});     

router.get('/clear_text', (req, res)=>{
    textData.text = "";
    res.json("Data Cleared")
});

router.post('/custom_text', (req, res)=>{
    textData.text = req.body.text;
    textData.Size = req.body.Size;
    res.send(textData)
});

module.exports = router;