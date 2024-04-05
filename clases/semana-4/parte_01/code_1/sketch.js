// Declare variables
let mobileNet;
let puffin;
let classifier; 

function modelReady(){
  console.log('Model is Ready!');
}

function preload(){
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}


function imageReady(){
  background(0);
  image(puffin, 0, 0, width, height);
  classifier.predict(puffin, gotResults); 
}

function gotResults(error, results){
  if(error){
    console.error(error);
  } else{
    console.log(results);
    let label = results[0].label;
    let confidence = results[0].confidence;
    fill(255);
    textSize(30);
    text(label, 10, height-100);
    text(confidence, 10, height-50); 
  }
}

// Setup function
function setup() {
  // Create canvas
  createCanvas(640, 480);

  // Load image
  puffin = createImg('images/toucan.jpeg', imageReady);
  puffin.hide(); // Hide the image
}
