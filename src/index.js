const express = require('express');
const app = new express();
// require('./schedular1');
// require('./schedular2');
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("Hello fron index, tell me what you want")
})
app.listen(5000,()=>{
    console.log('APP is runiing on port 5000');
    
})