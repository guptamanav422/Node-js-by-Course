const http= require("http");
const fs=require("fs");
const express=require('express');

// function 
const app=express();

app.use('/',(req,res,next)=>{
    console.log("this always runs");
    next();
});

app.use('/add-product',(req,res,next)=>{
    console.log("in the another middleware");
    //  sending response
    res.send(`<h1> Hello from add-product!`)
});
// executes for every incoming requests 
app.use('/',(req,res,next)=>{
    console.log("in the another middleware");
    //  sending response
    res.send(`<h1> Hello from Express!`)
});

// const server=http.createServer(app);

// server.listen(3000);
app.listen(3000);