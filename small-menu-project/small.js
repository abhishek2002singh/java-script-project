const menus=[
    {
        id: 1,
        title: "pen",
        price: 15,
        img: "image/copy.jpg",
    },

    {
        id: 2,
        title: "pen",
        price: 15,
        img: "image/download(1).jpg",
    },
    
    {
        id: 3,
        title: "pen",
        price: 15,
        img: "image/download(2).jpg",
    },
    
    {
        id: 4,
        title: "pen",
        price: 15,
        img: "image/download.jpg",
    },

    {
        id: 5,
        title: "pen",
        price: 15,
        img: "image/images.jpg",
    },
]

// const imp=document.querySelector(".image-part");
// const button1=document.querySelector(".btn");

// window.addEventListener("DOMContentLoaded" ,function(){
//     diplayMenuItems(menus);
//      displayMenuButtons();
// })

// function diplayMenuItems(menuItems){
//     let displayMenu = menuItems.map(function (item){
//     //    console.log(item);
//     return `<article class="menu-item">
//     <img src=${item.img} alt=${item.title} class="photo" />
//     <div class="item-info">
//       <header>
//         <h4>${item.title}</h4>
//         <h4 class="price">$${item.price}</h4>
//       </header>
      
//     </div>
//   </article>`;
//     })
//     displayMenu = displayMenu.join("");
//     console.log(displayMenu);
  
//     // sectionCenter.innerHTML = displayMenu;
//   }

//   function displayMenuButtons() {
//     const categories = menus.reduce(
//       function (values, item) {
//         if (!values.includes(item.category)) {
//           values.push(item.category);
//         }
//         return values;
//       },
//       ["all"]
//     );
//     const categoryBtns = categories
//       .map(function (category) {
//         return `<button type="button" class="filter-btn" data-id=${category}>
//             ${category}
//           </button>`;
//       })
//       .join("");
  
//     button1.innerHTML = categoryBtns;
//     const filterBtns = button1.querySelectorAll(".filter-btn");
//     console.log(filterBtns);
  
//     filterBtns.forEach(function (btn) {
//       btn.addEventListener("click", function (e) {
//         // console.log(e.currentTarget.dataset);
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menu.filter(function (menuItem) {
//           // console.log(menuItem.category);
//           if (menuItem.category === category) {
//             return menuItem;
//           }
//         });
//         if (category === "all") {
//           diplayMenuItems(menu);
//         } else {
//           diplayMenuItems(menuCategory);
//         }
//       });
//     });
//   }
       


   const imp=document.querySelector(".image-part");
   const button1=document.querySelector(".btn");
   const pen=document.querySelector(".dis");
   const price=document.querySelector(".price");

   pen.addEventListener("click" ,function(){
      
   })