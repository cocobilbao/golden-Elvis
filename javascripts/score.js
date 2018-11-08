function Score(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 200;
    this.y = 450;
    this.width = 150;
    this.height = 150;
    this.score = 0;

    this.img = new Image();
    this.img.src = "images/disco.png";
}

Score.prototype.draw = function() {
    this.ctx.font = "45px roboto";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(Math.floor(this.score), 70, 50);
  }

Score.prototype.record = function() {
    this.ctx.drawImage(this.img, 10, 10, 40, 40);
}

