var {db, MyModel } = require('./models/index')
var Promise = require('bluebird');

const data = [
    {name:'ian', rating:10}, 
    {name:'janet', rating:5},
    {name:'maiya', rating:2}
]; 


async function seed(){
    try{
       await db.sync({force : true});
       console.log('cleared database');
       await Promise.all(data.map(ele=>MyModel.create(ele)));
       db.close(); 
    }catch(err){
        console.log(err);
    }
};

seed();
