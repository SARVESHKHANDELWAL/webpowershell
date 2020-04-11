
  }

// Prevention

var images=["antibiotic.png","travel.png","pp.webp","pr.jpg","home.jpg"]
var i=images.length;
setInterval(slide,3000);
function slide()
{
  if(i<images.length)
  {
    i=i+1;
  }
  else {
    i=1;
  }
  document.querySelector(".slider").src=images[i-1];

}

function nextClick()
{
  if(i<images.length)
  { i=i+1;}
  else {
    i=1;
  }
  document.querySelector(".slider").src=images[i-1];
}
function prevClick()
{
  if(i>=images.length)
  { i=i-1;}
  else {
    i=5;
  }
  document.querySelector(".slider").src=images[i-1];
}
