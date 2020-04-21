const router = require('express').Router();




router.get("/",function(req,res){
  var request = require("request");

  var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'a091c6cf50msh034d39fd55b88fep1bc326jsn924ae5b0baff'
    }
  };

  request(options, function (error, response, body) {
  	if (error) throw new Error(error);
     var data=JSON.parse(body);
     var New=data.response[42].cases.new;
      var Active=data.response[42].cases.active;
       var Critical=data.response[42].cases.critical;
        var Recovered=data.response[42].cases.recovered;
         var Total=data.response[42].cases.total;
console.log(New);
     res.render("index",
     {
       New:New,
     Active:Active,
   Critical:Critical,
 Recovered:Recovered,
Total:Total
}

   );
  });
});
router.get("/prevention",function(req,res){
  res.render("prevention");
});
router.get("/blogs",function(req,res){
  res.render("blogs");
});
router.get("/home",function(req,res){
  res.render("index");
});
router.get("/login",function(req,res){
  res.render("login");
})
router.get("/overview",function(req,res){
  res.render("overview");
});
router.get("/symptoms",function(req,res){
  res.render("symptoms");
})
router.get("/table",function(req,res){
  res.render("table");
})

router.get("/faq",function(req,res){
  res.render("faq");
})
router.get("/feedback",function(req,res){
  res.render("feedback");
})

router.post("/feedback",function(req,res){
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


router.post("/Login.html",function(req){
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



module.exports = router;
