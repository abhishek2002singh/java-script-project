const popup=document.querySelector(".btn");
popup.addEventListener("click" ,function(){
    const pop=document.querySelector(".popup");
    pop.classList.toggle("open-popup");
})

const ok=document.querySelector(".btn1");
ok.addEventListener("click" , function(){
    const pop=document.querySelector(".popup");
    pop.classList.remove("open-popup");
})