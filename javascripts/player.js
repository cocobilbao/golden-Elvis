function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 450;
  this.y = 430;
  this.width = 130;
  this.height = 160;

  this.vx = 10;

// this.img.frames = 2;
// this.img.frameIndex = 0;



  this.img = new Image();
  this.img.src = "images/elvis-left.png";

  this.img2 = new Image();
  this.img2.src = "images/grave.png";

  this.setListeners();
}

var KEY_RIGHT = 39;
var KEY_LEFT = 37;

Player.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
  // 0,
  // Math.floor(this.img.width / this.img.frames),
  // this.img.height,

  // this.animateImg();

};

  // Player.prototype.animateImg = function() {

//   if (this.canvas.framesCounter % 6 === 0) {
//     this.img.frameIndex += 1;


//     if (this.img.frameIndex > 1) this.img.frameIndex = 0;
//   }
// };

// Sprite player



Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === KEY_LEFT) {
      this.x -= 10;
      this.vx -= 12;
    } else if (event.keyCode === KEY_RIGHT) {
      this.x += 10;
      this.vx += 12;
    }
  }.bind(this);
};

Player.prototype.move = function() {
  if (this.x <= -45) {
    this.x = 890;
  }
  if (this.x >= 910) {
    this.x = -35;
  }
};