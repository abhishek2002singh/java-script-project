const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const videoContainer = document.querySelector(".video-container");

playButton.addEventListener("click",  () =>{
    videoContainer.play();
});

pauseButton.addEventListener("click", function () {
    videoContainer.pause();
});




