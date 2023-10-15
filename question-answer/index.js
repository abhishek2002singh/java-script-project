  // const bt=document.querySelectorAll(".toggle")
  // const con=document.querySelector(".content")
  
  // bt.forEach(to=>{
   
  //     to.addEventListener("click" , ()=>{
  //       // const con=document.querySelector(".content")
  //       // con.forEach(mo=>{
          
  //       //   mo.classList.toggle("active")
  //       // })

  //       con.classList.toggle("active")
        
  //     })
  // })

  const bt = document.querySelectorAll(".toggle");
  const con = document.querySelectorAll(".content");
  
  bt.forEach((to, index) => {
    to.addEventListener("click", () => {
      con.forEach((mo, moIndex) => {
        if (moIndex === index) {
          mo.classList.toggle("active");
        }
        else{
          if (moIndex !== index) {
            mo.classList.remove("active");
        }
      }
      });
    });
  });
  
