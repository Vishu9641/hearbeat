// script.js

// Function to start the heartbeat and vibration effect
function startHeartbeat() {
    // Vibration pattern to simulate heartbeat (in milliseconds)
    const vibrationPattern = [100, 100]; // Vibrate for 100ms, pause for 100ms

    // Trigger vibration at a rate of approximately 65 BPM
    setInterval(() => {
        if (navigator.vibrate) {
            navigator.vibrate(vibrationPattern);
        }
    }, 923); // 923 ms gives you roughly 65 BPM
}

// Event listener for the button to start heartbeat, vibration, and play audio
document.getElementById("playButton").addEventListener("click", () => {
    startHeartbeat();

    // Play audio when button is clicked
    const audio = document.getElementById("audio");
    audio.currentTime = 0; // Reset audio to start
    audio.play();
});
