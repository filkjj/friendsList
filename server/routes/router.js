const router = require('express').Router();
const { MyModel } = require('../models/index');

router.get('/api/friends', async (req,res)=>{
    try{
    const data = await MyModel.findAll(
        {order: [['rating','ASC']]}
    );
    data ? res.json(data) : res.sendStatus(404);
    }catch(err){
        
    }
});

router.post('/api/friends', async (req,res,next)=>{
   try{
    console.log(req);
   }catch(err){
    next();
   }
});

router.get(`/api/friends/:id`, async (req,res,next)=>{
    try{
        const data = await MyModel.findByPk(+req.params.id);
        res.json(data);
    }catch(err){
        next();
    }
});

router.delete('/api/friends/:id', async (req,res,next)=>{
    try{
        const thing = await MyModel.findByPk(+req.params.id);
        thing.destroy();
    }catch(err){
        next();
    }
});

router.put('/api/friends/:id', async (req,res,next)=>{
    try{
        const thing = await MyModel.findByPk(req.params.id);
        await thing.update(thing.rating + 1);
        res.send(thing);
        console.log("row updated");
    }catch(err){
        next();
    }
});



module.exports = {router};