window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game = new Game("game")
    game.startGame();
  };

  function Game(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this.canvas);
    this.player = new Player(this.canvas);
    this.record = new Record(this);
    this.cake = new Cake(this.canvas);
    this.pil = new Pil(this.canvas);
    this.burger = new Burger(this.canvas);
    this.cake2 = new Cake2(this.canvas);
    this.pil2 = new Pil2(this.canvas);
    this.pizza = new Pizza(this.canvas);
    this.score = new Score(this.canvas);
}

  Game.prototype.startGame = function() {
    setInterval(function() {
      this.background.draw();
      
      this.player.draw();
      this.player.move();

      this.record.draw();
      this.record.move();

      this.cake.draw();
      this.cake.move();

      this.pil.draw();
      this.pil.move();

      this.burger.draw();
      this.burger.move();

      this.cake2.draw();
      this.cake2.move();

      this.pil2.draw();
      this.pil2.move();

      this.pizza.draw();
      this.pizza.move();

      this.record.collision();

      this.score.draw();

    }.bind(this)),
      1000 / 60;
  }



};