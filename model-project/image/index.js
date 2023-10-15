const button=document.querySelector(".btn")
button.addEventListener("click" , function(){
    const butt=document.querySelector(".box1");
    butt.classList.toggle("box2")
    const col=document.querySelector(".container");
    col.classList.toggle("container1")
})

const cross=document.querySelector(".cross")
cross.addEventListener("click" , function(){
    const butt=document.querySelector(".box1");
    butt.classList.remove("box2")
    const col=document.querySelector(".container");
    col.classList.remove("container1")

})