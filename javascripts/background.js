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