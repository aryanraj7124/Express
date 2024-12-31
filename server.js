//jshint esversion:6

const express=require("express");
const app=express();

app.get('/',(req,res)=>res.send("Hello World"));

// app.listen(3000,()=>console.log("Server Running on Port 3000"));\

app.get("/",function(req,res)
{
    res.send("Hello World");
})

app.get("/contact",function(req,res)
{
    res.send("Contact me AT:aryanraj712400@gmail.com");
})
app.get("/about",function(req,res)
{
    res.send("This is an about page of my server");
})
app.listen(3000,function()
{
    console.log("Server Started on Port 3000");
})