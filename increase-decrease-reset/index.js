let inc=document.querySelector(".box3");

let count=0;
let dis=document.querySelector(".box2 h1")

const increase=()=>{
    // console.log("click" , ++count)
    dis.innerHTML=("click" , ++count)
}
inc.addEventListener("click" , increase)

let dec=document.querySelector(".box4")

const decrease=()=>{
    // console.log("click" , --count)

    dis.innerHTML=("click" , --count)
}
dec.addEventListener("click" , decrease)

let re=document.querySelector(".box5")

const reset=()=>{
    // console.log("click" , count=0)
    dis.innerHTML=("click" , count=0)
}
re.addEventListener("click" , reset)