const reviews=[
    {
        id:1,
        name:"Susan smith",
        job:"web developer",
        img:"image/img3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

    {
        id:2,
        name:"anna john",
        job:"web developer",
        img:"image/img4.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

    {
        id:3,
        name:"Suman",
        job:"web developer",
        img:"image/img5.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

    {
        id:4,
        name:" smith",
        job:"web developer",
        img:"image/img6.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

    {
        id:1,
        name:"virat",
        job:"web developer",
        img:"image/img7.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

    {
        id:1,
        name:"kohali",
        job:"web developer",
        img:"image/img8.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit, eum consequatur ipsa sunt distinctio, quidem temporibus ullam architecto accusantium odit asperiores. Fuga adipisci illo in! Iusto doloremque magnam possimus."            
        

         
    },

   

    
    
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});