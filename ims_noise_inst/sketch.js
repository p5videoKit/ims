// https://editor.p5js.org/p5name/sketches/TU9CrJ1di
// ims noise inst

let my = {};

let alphaRed = [255, 0, 0, 80];
let alphaGreen = [0, 255, 0, 80];
let alphaGold = [255, 214, 0, 80];

function setup() {
  my.canv = createCanvas(windowWidth, windowHeight);
  // my.ln1 = new LineNoise();
  my.ln2 = new LineNoise({ start: 10000, rot: 45, color: alphaRed });
  my.ln3 = new LineNoise({ start: 30000, rot: 90, color: alphaGreen });
  my.ln4 = new LineNoise({ start: 40000, rot: 180, color: alphaGold });
}

function draw() {
  background(0, 10);
  noFill();

  my.ln1?.draw();
  my.ln2.draw();
  my.ln3.draw();
  my.ln4.draw();
}

// { inc, start, rot, rotDelta, incAccel }
class LineNoise {
  constructor(props) {
    // default properties
    this.inc = 0.001;
    // this. inc = 0.02;
    this.start = 0;
    this.rot = 0;
    // this. rotDelta = 0.0;
    this.rotDelta = 0.2;
    this.incAccel = 6;
    // this. incAccel = 2;
    this.color = 255;
    Object.assign(this, props);
    console.log('LineNoise start', this.start, this.color);
  }

  draw() {
    push();

    translate(width / 2, height / 2);
    rotate(radians(this.rot));
    this.rot = this.rot + this.rotDelta;
    stroke(this.color);
    beginShape();
    let xoff = this.start;
    for (let x = -width; x < width; x++) {
      // let y = random(height);
      let y = (noise(xoff) - 0.5) * height;
      vertex(x, y);

      xoff += this.inc;
    }
    endShape();

    this.start += this.inc * this.incAccel;

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Graphing 1D Perlin Noise (1D Noise Graph)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/noise/0.4-graphing-1d.html
// https://youtu.be/y7sgcFhk6ZM

// Adding Y-Axis: https://editor.p5js.org/codingtrain/sketches/nCYG2SCNq
// Noise Graph: https://editor.p5js.org/codingtrain/sketches/EZeHXBhei
// Noisy Sin: https://editor.p5js.org/codingtrain/sketches/M_kuAXwV2

// This example has been updated to use es6 syntax. To learn more about es6 visit: https://thecodingtrain.com/Tutorials/16-javascript-es6

// p5.js/1.11.1

// https://editor.p5js.org/p5name/sketches/ZO-2p0H5_
// ims noise rotate
