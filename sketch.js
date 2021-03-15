// sound input - mic
// circle to expand and contract depending on your breath

let mic;

function setup() {
  createCanvas(800, 600);

  //create an audio input
  mic = new p5.AudioIn();
  //start the Audio Input.
  mic.start();
}

// play button

//images
function draw() {
  background(220);

  //get overaaaaaaddllVolume
  vol = mic.getLevel() * 100;
  //console.log('vol', vol);

  fill(255);
  stroke(0);
  strokeWeight(3);
  circle(width / 2, height / 100);

  fill(255);
  stroke(0, 0, 0);

  // Draw a circle - diameter(d) based on volume
  let d = map(vol, 0, 1, 10, 100);
  circle(width / 2, height / 2, d);

  frameRate(120);
}
