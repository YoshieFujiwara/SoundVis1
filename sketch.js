// background color darkens as sound amplitude increases - lighter background as sound amp diminishes.

var wave;
var button;
var amp;
var volHistory = [];

function setup() {
  createCanvas(800, 600);

  //sounds
  oceanWave = loadSound('/sounds/heart-beat.mp3', loaded);
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
  background('#fae');
  vol = amp.getLevel() * 10;
  //console.log('vol', vol);
  volHistory.push(vol);
  stroke(200, 0, 0);
  strokeWeight(1);
  fill(255, 30, 100);

  translate(width / 2, height / 2);

  beginShape();

  for (let i = 0; i < 360; i++) {
    let r = map(volHistory[i], 0, 1, 10, 100);
    let x = r * cos(i);
    let y = r * sin(i);

    //let y = map(volHistory[i], 0, 1, height / 2, 0);
    vertex(x, y);
  }

  endShape();

  if (volHistory.length > 120) {
    volHistory.splice(0, 100);
  }

  frameRate(25);
}
