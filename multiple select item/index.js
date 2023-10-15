const selectbtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");
const re = document.querySelector(".check-icon");

selectbtn.addEventListener("click", () => {
  selectbtn.classList.toggle("open");
});

let count = 0;

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("ckecked");


    let checked=document.querySelectorAll(".ckecked");
    btntext=document.querySelector(".btn-text")


//     // if (item.classList.contains("ckecked")) {
//     //   count++;
//     // } else {
//     //   count--;
//     // }

    //console.log(count)

    if(checked&&checked.length>0)
    {
        btntext.innerText=`${checked.length} Selected`
    }
    else{
        btntext.innerText=`Select language`
    }
    
    
  });
});



// items.forEach((item) => {
//     item.addEventListener("click", () => {
//       item.classList.toggle("ckecked");
  
//       let checked=document.querySelectorAll(".ckecked");
//         btntext=document.querySelector(".btn-text")

  
//       if (item.classList.contains("ckecked")) {
//         count++;
//       } else {
//         count--;
//       }
  
//       console.log(count)

//       if(count<=items.length)
//     {
//         btntext.innerText=`${count} Selected`
//     }

//     if(count==0){
//          btntext.innerText=`Select language`

//     }
       
  
   
      
      
//     });
//   });



