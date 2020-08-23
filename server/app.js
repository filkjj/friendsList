const path = require('path');
const express = require('express');
const morgan = require("morgan");
const app = express();
const {router} = require('./routes/router');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use('/', router);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(function(req, res, next){
    var err  = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.send(
      "something went wrong???"
    );
  });

const PORT = 8008;
const init = async function(){
    app.listen(PORT, ()=>console.log(`LISTENING ON PORT ${PORT}`));
};

init();