// https://editor.p5js.org/p5name/sketches/TU9CrJ1di
// ims noise inst

let my = {};

function setup() {
  my.canv = createCanvas(windowWidth, windowHeight);
  my.lineNoise = new LineNoise();
}

function draw() {
  background(0, 10);

  my.lineNoise.draw();
}

// { inc, start, rot, rotDelta, incAccel }
class LineNoise {
  constructor(props) {
    // default properties
    let d = {};
    d.inc = 0.001;
    // d. inc = 0.02;
    d.start = 0;
    d.rot = 0;
    // d. rotDelta = 0.0;
    d.rotDelta = 0.2;
    d.incAccel = 6;
    // d. incAccel = 2;
    Object.assign(this, d, props);
  }

  draw() {
    push();

    translate(width / 2, height / 2);
    rotate(radians(this.rot));
    this.rot = this.rot + this.rotDelta;
    stroke(255);
    noFill();
    beginShape();
    let xoff = this.start;
    for (let x = -width; x < width; x++) {
      stroke(255);
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
