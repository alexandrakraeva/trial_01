document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const animation = document.getElementById("animation");

    // Function to play the video
    function playVideo() {
        animation.style.display = "block";
        animation.load(); // Load the video
        animation.play(); // Play the video
    }

    // Add a click event listener to the play button
    playButton.addEventListener("click", playVideo);

    // Add an ended event listener to the video element
    animation.addEventListener("ended", function () {
        animation.style.display = "none";
        playButton.style.display = "block";
    });

    // On iPhones and iPads, trigger video playback on user interaction
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        playButton.style.display = "block"; // Show the play button
        playButton.addEventListener("click", playVideo); // Play on button click
    } else {
        playVideo(); // Autoplay for other devices
    }
});
