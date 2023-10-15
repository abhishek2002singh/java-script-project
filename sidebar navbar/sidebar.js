const nav=document.querySelector(".box1")
nav.addEventListener("click" ,function()
{
    const navb=document.querySelector(".box2");
  
    navb.classList.toggle("active")
    const cl=document.querySelector(".box3")
    cl.classList.toggle("box4")
  
   
})

const close=document.querySelector(".box3")
close.addEventListener("click", function(){
    const navb=document.querySelector(".box2");
  
    navb.classList.remove("active")
    const cl=document.querySelector(".box3")
    cl.classList.remove("box4")
})