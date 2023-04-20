let box=document.getElementById("box");

let btn=document.getElementById("btn");
var count = 0;
box.addEventListener('click',function(){
    count++;
    btn.innerText=count+" ";
});