// Get the canvas and context
var canvas = document.getElementById("canvaelement");
var canvasContext = canvas.getContext("2d");

// Get the options elements
var colorPicker = document.getElementById("color-picker");
var sizeRange = document.getElementById("size-range");
var poleCheckbox = document.getElementById("pole-checkbox");

// Function to draw the Japan flag with customizable options
function draw() {
  var flagColor = colorPicker.value;
  var flagSize = parseInt(sizeRange.value);
  var showPole = poleCheckbox.checked;

  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the flag background rectangle
  drawrect(canvasContext, 0, 0, flagSize, flagSize, flagColor);

  // Draw the red circle in the center
  drawcircle(canvasContext, flagSize / 2, flagSize / 2, flagSize / 4, "red");

  if (showPole) {
    // Draw the vertical pole
    drawrect2(canvasContext, flagSize / 2 - 7.5, 0, 15, flagSize, "brown");
  }
}

function drawline(canvasContext, x1, y1, x2, y2, color) {
  canvasContext.beginPath();
  canvasContext.moveTo(x1, y1);
  canvasContext.lineTo(x2, y2);
  canvasContext.strokeStyle = color;
  canvasContext.stroke();
}

function drawrect(canvasContext, x, y, width, height, color) {
  canvasContext.beginPath();
  canvasContext.rect(x, y, width, height);
  canvasContext.fillStyle = color;
  canvasContext.fill();
}

function drawrect2(canvasContext, x, y, height, width, color) {
  canvasContext.beginPath();
  canvasContext.rect(x, y, height, width);
  canvasContext.fillStyle = color;
  canvasContext.fill();
}

function drawcircle(canvasContext, x, y, radius, color) {
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
  canvasContext.fillStyle = color;
  canvasContext.fill();
}

// Attach event listeners to options elements
colorPicker.addEventListener("input", draw);
sizeRange.addEventListener("input", draw);
poleCheckbox.addEventListener("change", draw);

// Call the draw function to draw the Japan flag on page load
draw();
