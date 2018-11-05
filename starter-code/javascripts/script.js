

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
  this.img.src = "/images/painel-las-vegas-2-5x1-5m-paineis-sublimacao.jpg";

}

Background.prototype.draw = function() {
   
  this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
     

}

Background.prototype.ball = function() {

  this.ctx.fillStyle = 'green'
  this.ctx.fillRect(this.x, this.y, this.width-500, this.height-300);
}

function Player(canvas){
  
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 500;
  this.y = 0;
  this.width; 
  this.height;

  this.vx = 3;
  this.vy = 3;

  this.img = new Image();
  this.img.src="../images/elvis-body.png";
}

Player.prototype.draw = function(){

  this.ctx.drawImage(this.img, this.x, this.y, 80, 60)

}

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var background = new Background(canvas);
  var player = new Player(canvas);





  function startGame() {
    console.log(background.draw);
    

      background.draw();
      background.ball();
      player.draw();
  
    
  }

  
};
