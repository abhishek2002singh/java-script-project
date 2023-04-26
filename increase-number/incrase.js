const box1 = document.querySelector(".box");

let count=0;
const box4 = document.querySelector(".box3");

const increase=()=>{
    
    
    
    box4.innerHTML=("click",count++);
    
  
}
box1.addEventListener( "click",increase);
// box4.addEventListener( "click",increase);



const col=document.querySelector("body");
const col1=()=>{
    document.body.style.background="red";
  
}
col.addEventListener( "click",col1);

const colo=document.querySelector(".btn");
const colo1=()=>{
    const button = document.querySelector("button");
    button.style.background="yellow";
  
}
colo.addEventListener( "click",colo1);




    
    
   
  


