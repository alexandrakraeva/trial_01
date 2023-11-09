const playButton = document.getElementById("play-button");
const animation = document.getElementById("animation");

playButton.addEventListener("click", () => {
    playButton.style.display = "none";
    animation.style.display = "block";
    animation.load(); // Load the video
    animation.play(); // Play the video
});

animation.addEventListener("ended", () => {
    animation.style.display = "none";
    playButton.style.display = "block";
});
