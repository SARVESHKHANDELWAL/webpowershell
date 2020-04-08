var a = 1;

  function operate() {

    if (a % 2 == 0) {
      close();
    } else {
      open();
    }
  }

  function open() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("btn").style.left = "255px";
    a++
  }

  function close() {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("btn").style.left = "5px";
    document.getElementById("sidenav").style.border = "none";
    a++
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
