document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const animation = document.getElementById("animation");

    // Function to play the video and hide the play button
    function playVideo() {
        playButton.style.display = "none";
        animation.style.display = "block";
        animation.load(); // Load the video
        animation.play(); // Play the video
    }

    // Function to show the play button when the video ends
    function showPlayButton() {
        animation.style.display = "none";
        playButton.style.display = "block";
    }

    // Add a click event listener to the play button
    playButton.addEventListener("click", playVideo);

    // Add an ended event listener to the video element
    animation.addEventListener("ended", showPlayButton);
});
