const router = require('express').Router();
const { db } = require('../models/index');

router.get('/friendsList', async (req,res)=>{
    try{
    const data = "yarhartidllydee";
    res.json(data);
    }catch(err){
        res.send('oops');
    }
});


module.exports = router;