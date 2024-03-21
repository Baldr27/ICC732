// Video
let video;
let classifier;
let modelLoaded = 'https://teachablemachine.withgoogle.com/models/bXy2kDNi/';
let label = 'esperando...';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelLoaded);
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2: Classify!
function classifyVideo() {
  classifier.classify(video, gotResults); // Corrected this line
}

function draw() {
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is a placeholder
  let emoji = "🫷"; // Placeholder emoji
  if (label == "nighttime") {
    emoji = "☽"; // Nighttime emoji
  } else if (label == "daytime") {
    emoji = "🌞"; // Daytime emoji, corrected to use else if for proper conditional logic
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Update the label with the result from the classifier
  label = results[0].label;
}
