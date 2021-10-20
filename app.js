const http= require("http");
const fs=require("fs");
const express=require('express');

// function 
const app=express();

// executes for every incoming requests 
app.use((req,res,next)=>{
    console.log("in the middleware");
    next(); // allows the request to continue to the next middleware
});
app.use((req,res,next)=>{
    console.log("in the another middleware");
    //  sending response
    res.send(`<h1> Hello from Express!`)
});

// const server=http.createServer(app);

// server.listen(3000);
app.listen(3000);