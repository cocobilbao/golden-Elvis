  function Background(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.x = 0;
    this.y = 0;

    this.img = new Image();
    this.img.src = "images/GracelandMansion.png";
  }

  Background.prototype.draw = function() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.canvas.width,
      this.canvas.height
    );
  };

  function Music(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.sound = new Audio("audio/Elvis Presley - Burning Love.mp3");
    this.soundOfDeath = new Audio("audio/vinyl-rewind.wav");
    this.soundOfSuccess = new Audio("audio/success.wav");    
  }

  Music.prototype.play = function() {
   this.sound.play();
   this.sound.loop = true;       
  };
  Music.prototype.pause = function() {
    this.sound.pause();
    this.soundOfDeath.play();         
   };

   Music.prototype.hit = function() { 
    this.soundOfSuccess.play();      
   };


