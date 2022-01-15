console.log("hello");
console.log(document.getElementById("button-addon2"));

submit_id.addEventListener("click", function () {
  console.log("hello");
  let x = document.getElementById("alert_signin");
  y = document.getElementById("alert_lol");
  if (x.style.display === "block") {
    y.innerHTML = "<strong>Holy guacamole!</strong> We have your email already";
    // setTimeout(function () {
    //   x.style.display = "none";
    // }, 2000);
  } else {
    x.style.display = "block";
  }
});

let x=document.getElementById("heading_club");
setInterval(() => {
  
  if(x.style.background==" red"){
    console.log("hello abc");
    x.style.background=" -webkit-linear-gradient(#9b865f, black));"
  }
  else{

  }
}, 1000);

