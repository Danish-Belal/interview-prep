require('dotenv').config();
const jwt = require('jsonwebtoken');

const token = jwt.sign({id:1}, process.env.JWT_SECRET, {expiresIn: '1h'});
console.log(token);


const decode = jwt.verify(token,process.env.JWT_SECRET);
console.log(decode);


const rateLimit = require('express-rate-limit');
application.use(rateLimit({wnidowMs:15*60*1000}))