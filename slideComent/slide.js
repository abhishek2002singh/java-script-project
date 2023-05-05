const comments = [
    {
        id: 1,
        name: "Susan smith",
        img: "image/pho2.jpg",
        text: "development, web development, machine learning, artificial intelligence, cybersecurity, blockchain, serverless architecture, Docker, Kubernetes, scalability, performance optimization, code review, open-source, documentation, project management.",
    },
    {
        id: 2,
        name: "smith",
        img: "image/pho3.jpg",
        text: "To obtain a web developer position where I can utilize my skills in HTML, CSS, JavaScript, and various web development frameworks to create engaging and functional websites.",
    },
    {
        id: 3,
        name: "kamal raj",
        img: "image/pho4.jpg",
        text: "Barack Obama served as the 44th President of the United States from 2009 to 2017, making history as the first African American to hold the office. He was awarded the Nobel Peace Prize in 2009 for his efforts to strengthen international diplomacy and cooperation between peoples. ."
    },
    {
        id: 4,
        name: "kohali",
        img: "image/pho5.jpg",
        text: "Virat Kohli is an Indian cricketer and former captain of the Indian national team. He is considered one of the best batsmen in the world and has numerous records to his name. Kohli is known for his aggressive and passionate playing style, as well as his leadership on the field."
    },
    {
        id: 5,
        name: "Susan smith",
        img: "image/pho6.jpg",
        text: "Mahendra Singh Dhoni, commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team. He is considered one of the greatest cricketing captains of all time and is known for his calm demeanor under pressure"
    },
    {
        id: 6,
        name: "kamal",
        img: "image/pho7.jpg",
        text: "Ravindra Jadeja is an Indian cricketer known for his exceptional skills as an all-rounder, with strengths in both batting and bowling. He is also a superb fielder and has earned the nickname SIR JADEJA for his impressive performances on the field."
    }
];

const im1 = document.getElementById("box1");
const na = document.getElementById("box2");
const com = document.getElementById("box3");

let count = 0;

function showPerson() {
    const item = comments[count];
    im1.src = item.img;
    na.textContent = item.name;
    com.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', function () {
    showPerson();

});
    setInterval(() => {
        count++;
        if (count === comments.length) {
            count = 0;
        }
        // console.log(count);
        showPerson();
    }, 2000);

