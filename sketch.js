// background color darkens as sound amplitude increases - lighter background as sound amp diminishes.

var wave;
var button;
var amp;
var volHistory = [];

function setup() {
  createCanvas(600, 400);

  //sounds
  oceanWave = loadSound('/sounds/water-waves.mp3', loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
  amp = new p5.Amplitude();
}

function loaded() {
  console.log('loaded');
  button = createButton('play');
  button.mouseClicked(togglePlaying);
}

// play button
function togglePlaying() {
  if (!oceanWave.isPlaying()) {
    oceanWave.play();
    oceanWave.setVolume(0.3);
    button.html('pause');
  } else {
    oceanWave.pause();
    button.html('play');
  }
}

//images
function draw() {
  background(100, 170, 225);
  vol = amp.getLevel() * 10;
  //console.log('vol', vol);
  volHistory.push(vol);
  stroke(255);

  beginShape();

  for (let i = 0; i < volHistory.length; i++) {
    let y = map(volHistory[i], 0, 1, height / 2, 0);

    vertex(i, y);
  }

  endShape();

  if (volHistory.length > width) {
    volHistory.splice(0, 1);
  }

  frameRate(60);
}
