let img;
let detector;
let detections = []; // Store detection results

// paso 1: cargar modelo
function preload() {
  img = loadImage('images/bull.jpeg'); // Ensure image is loaded before setup
  detector = ml5.objectDetector('cocossd'); // Load model
}


// paso 2: detectar
function setup() {
  createCanvas(640, 480);
  image(img, 0, 0, width, height); // Draw image to canvas
  detector.detect(img, gotDetections); // Start detection after image is drawn
}

//paso 3: obtener resultados
function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  detections = results; // Store results for drawing
}

// paso 4: usar los resultados
function draw() {
  image(img, 0, 0, width, height); // Redraw image to ensure it's always there
  detections.forEach(object => { // Iterate over each detection and draw it
    stroke(0,255,0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  });
}
