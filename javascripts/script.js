

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function Canvas(id){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    
}

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
   
  this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
     

}


function Player(canvas){
  
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 450;
  this.y = 430;
  this.width; 
  this.height;

  this.vx = 10;
 

  

  this.img = new Image();
  this.img.src="images/elvis-left.png";


  this.setListeners();
}

var KEY_RIGHT = 39;
var KEY_LEFT = 37;





Player.prototype.draw = function(){

  this.ctx.drawImage(this.img, this.x, this.y, 130, 160)


}

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === KEY_LEFT) {
      this.x -= 10;
      this.vx -= 10;
    } else if (event.keyCode === KEY_RIGHT){
      this.x += 10;
      this.vx += 10;
    }
  }.bind(this);
};

Player.prototype.move=function(){
 
  if(this.x <= -5){
    this.x = 0;
  } if (this.x >= 852){
    this.x = 847;
  }
 
  }


function Things(canvas) {

  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random()*975);
  this.y = -20;
  this.width; 
  this.height;

  this.vy = 0.4;

  this.img = new Image();
  this.img.src="images/disco.png";

}

Things.prototype.draw = function(){

  this.ctx.drawImage(this.img, this.x, this.y, 80, 80)

}

 
Things.prototype.move= function(){
  if(this.y > 700){
    this.y = -20;
    this.x = Math.floor(Math.random()*975);
  }

  this.y += this.vy;

    }

  

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var background = new Background(canvas);
  var player = new Player(canvas);
  var things = new Things(canvas);





  function startGame() {
    setInterval (function(){

      background.draw();

      player.draw();
      player.move();

      things.draw();
      things.move();
      


    } ), 1000/60  }

  
};
