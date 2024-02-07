// Get the canvas and context
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");

// Set initial properties
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Event listeners for mouse/touch interaction
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stopDrawing);

// Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX || e.touches[0].pageX - canvas.offsetLeft, e.offsetY || e.touches[0].pageY - canvas.offsetTop];
}

// Function to draw
function draw(e) {
    if (!isDrawing) return;
    const [x, y] = [e.offsetX || e.touches[0].pageX - canvas.offsetLeft, e.offsetY || e.touches[0].pageY - canvas.offsetTop];
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Clear signature function
document.getElementById("clearButton").addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
