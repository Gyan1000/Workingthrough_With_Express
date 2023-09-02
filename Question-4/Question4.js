const express =require('express');
const api=express();

const hostname="localhost";
const port=2000;

api.get('/random',(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    let random=Math.floor((Math.random()*100));
    res.send(JSON.stringify({random:random}));
})

api.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})