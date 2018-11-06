window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
  }



  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var background = new Background(canvas);
  var player = new Player(canvas);
  var record = new Record(canvas);
  var cake = new Cake(canvas);
  var pil = new Pil(canvas);
  var burger = new Burger(canvas);
  var cake2 = new Cake2(canvas);
  var pil2 = new Pil2(canvas);
  var pizza = new Pizza(canvas);

  function startGame() {
    setInterval(function() {
      background.draw();

      player.draw();
      player.move();

      record.draw();
      record.move();

      cake.draw();
      cake.move();

      pil.draw();
      pil.move();

      burger.draw();
      burger.move();

      cake2.draw();
      cake2.move();

      pil2.draw();
      pil2.move();

      pizza.draw();
      pizza.move();

    }),
      1000 / 60;
  }



};