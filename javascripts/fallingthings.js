function Record(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.x = Math.floor(Math.random() * 900);
  this.y = -80;
  this.width = 80;
  this.height = 80;

  this.vy = this.vy;

  this.img = new Image();
  this.img.src = "images/disco.png";
}

Record.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Record.prototype.move = function() {
  if (this.y > 550) {
    this.y = -80;
    this.x = Math.floor(Math.random() * 900);
  }
  console.log(this.y)
  this.vy = Math.random() * (this.game.score.score > 10 ? 0.95 : this.game.score.score > 5 ? 0.65 : 0.35 - 0.25) + 0.25;
  this.y += this.vy;
};

Record.prototype.collision = function() {
  if (
    this.player.x - 10 + this.player.width - 10 > this.x - 10 &&
    this.x - 10 + this.width - 10 > this.player.x - 10 &&
    this.y - 10 + this.height - 10 > this.player.y - 10
  ) {
    this.game.score.score++;
    this.y = -80;
    this.x = Math.floor(Math.random() * 900);
    this.game.music.hit();
  }
};

function Cake(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.score = this.game
  this.x = Math.floor(Math.random() * (900 - 750)) + 750;
  this.y = -80;
  this.width = 60;
  this.height = 60;

  this.vy = Math.random() * (0.65 - 0.4) + 0.4;

  this.img = new Image();
  this.img.src = "images/cheesecake.png";
}

Cake.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Cake.prototype.move = function() {
  if (this.y > 550) {
    this.y = -80;
    this.x = Math.floor(Math.random() * (900 - 750)) + 750;
  }
  this.y += this.vy;
};

Cake.prototype.collision = function() {
  if (
    this.player.x - 10 + this.player.width - 10 > this.x - 15 &&
    this.x - 15 + this.width - 10 > this.player.x - 10 &&
    this.y - 15 + this.height - 10 > this.player.y - 10
  ) {
    this.player.img = this.player.img3;
    clearInterval(this.game.interval);
    this.player.draw();
    this.game.music.pause();
  }
};

function Pill(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.x = Math.floor(Math.random() * (650 - 500)) + 500;
  this.y = -160;
  this.width = 60;
  this.height = 60;

  this.vy = Math.random() * (0.65 - 0.4) + 0.4;

  this.img = new Image();
  this.img.src = "images/pill.png";
}

Pill.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Pill.prototype.move = function() {
  if (this.y > 550) {
    this.y = -180;
    this.x = Math.floor(Math.random() * (650 - 500)) + 500;
  }

  this.y += this.vy;
};

Pill.prototype.collision = function() {
  if (
    this.player.x - 10 + this.player.width - 10 > this.x - 15 &&
    this.x - 15 + this.width - 10 > this.player.x - 10 &&
    this.y - 15 + this.height - 10 > this.player.y - 10
  ) {
    this.player.img = this.player.img3;
    clearInterval(this.game.interval);
    this.player.draw();
    this.game.music.pause();
  }
};

function Burger(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.x = Math.floor(Math.random() * (400 - 250)) + 250;
  this.y = -160;
  this.width = 70;
  this.height = 50;

  this.vy = Math.random() * (0.65 - 0.4) + 0.4;

  this.img = new Image();
  this.img.src = "images/burger.png";
}

Burger.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Burger.prototype.move = function() {
  if (this.y > 550) {
    this.y = -180;
    this.x = Math.floor(Math.random() * (400 - 250)) + 250;
  }

  this.y += this.vy;
};

Burger.prototype.collision = function() {
  if (
    this.player.x - 10 + this.player.width - 10 > this.x - 15 &&
    this.x - 15 + this.width - 10 > this.player.x - 10 &&
    this.y - 15 + this.height - 10 > this.player.y - 10
  ) {
    this.player.img = this.player.img3;
    clearInterval(this.game.interval);
    this.player.draw();
    this.game.music.pause();
  }
};

function Pizza(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.x = Math.floor(Math.random() * 150);
  this.y = -160;
  this.width = 70;
  this.height = 50;

  this.vy = Math.random() * (0.65 - 0.4) + 0.4;

  this.img = new Image();
  this.img.src = "images/pizza.png";
}

Pizza.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Pizza.prototype.move = function() {
  if (this.y > 550) {
    this.y = -180;
    this.x = Math.floor(Math.random() * 150);
  }

  this.y += this.vy;
};

Pizza.prototype.collision = function() {
  if (
    this.player.x - 10 + this.player.width - 10 > this.x - 15 &&
    this.x - 15 + this.width - 10 > this.player.x - 10 &&
    this.y - 15 + this.height - 10 > this.player.y - 10
  ) {
    this.player.img = this.player.img3;
    clearInterval(this.game.interval);
    this.player.draw();
    this.game.music.pause();
  }
};
