// script.js

// Function to update the visualizer bars
function updateVisualizer() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    // Randomize the animation delay to create a smoother effect
    const delay = Math.random() * 0.5; // Adjust this value for your desired speed
    bar.style.animationDelay = `${delay}s`;
  });
}

// Call the updateVisualizer function to start the animation
updateVisualizer();
