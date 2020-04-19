
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

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true,useUnifiedTopology:true});

const userSchema={
  firstname:String,
  lastname:String,
  email:String,
  rateus:Number,
  subject:String
};



const User=new mongoose.model("User",userSchema);

app.get("/",function(req,res){
  res.render("index");
});
app.get("/prevention",function(req,res){
  res.render("prevention");
});
app.get("/symptoms",function(req,res){
  res.render("symptoms");
});
app.get("/home",function(req,res){
  res.render("index");
});
app.get("/login",function(req,res){
  res.render("login");
})
app.get("/overview",function(req,res){
  res.render("table");
})
app.get("/faq",function(req,res){
  res.render("faq");
})
app.get("/feedback",function(req,res){
  res.render("feedback");
})
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
app.post("/Login.html",function(req){
  const email=req.body.email;

  const data={
    members:[
     {
       email_address: email,
       status:"subscribed"

    }
   ]
  };
  const JSONData= JSON.stringify(data);
  const url="https://us19.api.mailchimp.com/3.0/lists/6b42b7ec91";
  const  options={
    method:"POST",
    auth:"sarvesh:3f650f61ed2eedcc99b087b42e1ce4b8-us19"
   }
 var request = https.request(url,options,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      console.log(JSON.parse(data));
    })
   })

    request.write(JSONData);
    request.end();
  
});

 
 app.listen(process.env.PORT||3000,function(){
 console.log("hello world!");
});
























