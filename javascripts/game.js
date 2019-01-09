window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game = new Game("game");
    game.startGame();
  };

  function Game(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this.canvas);
    this.player = new Player(this.canvas);
    this.record = new Record(this);
    this.cake = new Cake(this);
    this.pill = new Pill(this);
    this.burger = new Burger(this);
    this.pizza = new Pizza(this);
    this.score = new Score(this.canvas);

    this.music = new Music(this.canvas);
  }

  Game.prototype.startGame = function() {
    this.music.play();
    (this.interval = setInterval(
      function() {
        this.background.draw();

        this.player.draw();
        this.player.move();

        this.record.draw();
        this.record.move();

        this.cake.draw();
        this.cake.move();

        this.pill.draw();
        this.pill.move();

        this.burger.draw();
        this.burger.move();

        this.pizza.draw();
        this.pizza.move();

        this.record.collision();
        this.cake.collision();
        this.pill.collision();
        this.burger.collision();
        this.pizza.collision();

        this.score.draw();
        this.score.record();
      }.bind(this)
    )),
      1000 / 60;
  };
};
