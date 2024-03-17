var no = document.querySelector("#no");
var answer = document.querySelector("#answer");
no.addEventListener("click",function(){
  
no.style.position = "absolute";
no.style.top = Math.floor(Math.random() * 90 + 5) + "%";
no.style.left = Math.floor(Math.random() * 90 + 5) + "%";

})