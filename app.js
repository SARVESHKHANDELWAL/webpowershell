
  const express = require('express');
  const bodyParser = require('body-parser');
  const _ = require('lodash');
  const ejs = require('ejs');
   const mongoose=require("mongoose");


  const app=express();

  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("images"));
app.use('/', require("./router"))
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true,useUnifiedTopology:true});

const userSchema={
  firstname:String,
  lastname:String,
  email:String,
  rateus:Number,
  subject:String
};
const User=new mongoose.model("User",userSchema);
app.post("/feedback",function(req,res){
 const newUser=new User({
   firstname:req.body.firstname,
   lastname:req.body.lastname,
   email:req.body.email,
   rateus:req.body.rateus,
   suggestion:req.body.suggestion
 });
 newUser.save(function(err){
   if(err){
     console.log(err);
     res.render("feedback");
   }
   else
   {
     res.render("index");
   }
 });
});







 app.listen(process.env.PORT||3000,function(){
 console.log("hello world!");
});
