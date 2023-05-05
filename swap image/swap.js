const photos=[

    {
        id:1,
        name:"chahal",
        img:"image/chahal.jpg",
    },

    {
        id:2,
        name:"dhwan",
        img:"image/dhavan sir.jpg",
    },

    {
        id:3,
        name:"dhoni",
        img:"image/dhoni sir.jpg",
    },

    {
        id:4,
        name:"gill",
        img:"image/gil.jpg",
    },

    {
        id:5,
        name:"hit",
        img:"image/hit man.jpg",
    },

    {
        id:6,
        name:"sachin",
        img:"image/sachin sir.jpg",
    },

    {
        id:7,
        name:"yadav",
        img:"image/yadav bhai.jpg",
    }

    

];

const img=document.getElementById("im1")
const name1=document.getElementById("pers")

const nbtn=document.querySelector(".btn-next1")
const bbtn=document.querySelector(".btn-next2")

let count=0;

window.addEventListener('DOMContentLoaded', function () {
   showPerson();
  });



function showPerson(){
    const item=photos[count];
    img.src = item.img;
    name1.textContent=item.name;
}

nbtn.addEventListener('click', function () {
    count++;
    if (count > photos.length - 1) {
      count = 0;
    }
    showPerson(count);
  });

  bbtn.addEventListener('click', function () {
    count--;
    if (count<0) {
      count = photos.length - 1;
    }
    showPerson(count);
  });