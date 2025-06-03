const express = require('express');
const app = new express();
require('./schedular1');
app.use(express.json());

app.listen(5000,()=>{
    console.log('APP is runiing on port 5000');
    
})