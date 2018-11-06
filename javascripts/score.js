function Score(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 200;
    this.y = 450;
    this.width = 150;
    this.height = 150;
    this.score = 0;
}


Score.prototype.draw = function() {
    this.ctx.font = "40px roboto";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(Math.floor(this.score), 20, 50);
    
  }