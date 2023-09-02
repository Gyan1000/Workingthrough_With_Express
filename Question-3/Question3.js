const express=require('express');

const app=express();

const hostname="localhost";
const port=3001;
app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.send("msg:`I am home page`");
})
app.get('/about',(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.send("msg:`I am about page`");
})
app.get('/email',(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    res.send("msg:`<b><u>support@pwskill.com</u></b>`");
})


app.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})