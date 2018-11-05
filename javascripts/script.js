window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function Canvas(id) {
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
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.canvas.width,
      this.canvas.height
    );
  };

  function Player(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 450;
    this.y = 430;
    this.width;
    this.height;

    this.vx = 10;

  // this.img.frames = 2;
  // this.img.frameIndex = 0;



    this.img = new Image();
    this.img.src = "images/elvis-left.png";

    this.setListeners();
  }

  var KEY_RIGHT = 39;
  var KEY_LEFT = 37;

  Player.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 130, 160);
      // this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    // 0,
    // Math.floor(this.img.width / this.img.frames),
    // this.img.height,

    // this.animateImg();

  };

    // Player.prototype.animateImg = function() {
 
  //   if (this.game.framesCounter % 6 === 0) {
  //     this.img.frameIndex += 1;
  
  
  //     if (this.img.frameIndex > 1) this.img.frameIndex = 0;
  //   }
  // };

  // Sprite player

0;

  Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === KEY_LEFT) {
        this.x -= 10;
        this.vx -= 12;
      } else if (event.keyCode === KEY_RIGHT) {
        this.x += 10;
        this.vx += 12;
      }
    }.bind(this);
  };

  Player.prototype.move = function() {
    if (this.x <= -45) {
      this.x = 890;
    }
    if (this.x >= 910) {
      this.x = -35;
    }
  };



  // objetos que caen, principio.

  //Disco

  function Record(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 920);
    this.y = -40;
    this.width;
    this.height;

    this.vy = 0.3;

    this.img = new Image();
    this.img.src = "images/disco.png";
  }

  Record.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 80, 80);
  };

  Record.prototype.move = function() {
    if (this.y > 700) {
      this.y = -40;
      this.x = Math.floor(Math.random() * 920);
    }

    this.y += this.vy;
  };
//Tarta

  function Cake(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 920);
    this.y = -80;
    this.width;
    this.height;

    this.vy = 0.5;

    this.img = new Image();
    this.img.src = "images/cheesecake.png";
  }

  Cake.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 60, 60);
  };

  Cake.prototype.move = function() {
    if (this.y > 700) {
      this.y = -80;
      this.x = Math.floor(Math.random() * 920);
    }

    this.y += this.vy;
  };

// Pirula

  function Pil(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 920);
    this.y = -160;
    this.width;
    this.height;

    this.vy = 0.4;

    this.img = new Image();
    this.img.src = "images/pil.png";
  }

  Pil.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 60, 60);
  };

  Pil.prototype.move = function() {
    if (this.y > 700) {
      this.y = -180;
      this.x = Math.floor(Math.random() * 920);
    }

    this.y += this.vy;
  };

  // Hamburguesa

  function Burger(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 920);
    this.y = -160;
    this.width;
    this.height;

    this.vy = 0.6;

    this.img = new Image();
    this.img.src = "images/burger.png";
  }

  Burger.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 70, 50);
  };

  Burger.prototype.move = function() {
    if (this.y > 700) {
      this.y = -180;
      this.x = Math.floor(Math.random() * 920);
    }

    this.y += this.vy;
  };

//Tarta

function Cake2(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 920);
  this.y = -280;
  this.width;
  this.height;

  this.vy = 0.4;

  this.img = new Image();
  this.img.src = "images/cheesecake2.png";
}

Cake2.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 60, 60);
  this.ctx.rotate(-this.angle + Math.PI/2.0);
};

Cake2.prototype.move = function() {
  if (this.y > 700) {
    this.y = -480;
    this.x = Math.floor(Math.random() * 920);
  }

  this.y += this.vy;
};

// Pirula

function Pil2(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 920);
  this.y = -160;
  this.width;
  this.height;

  this.vy = 0.5;

  this.img = new Image();
  this.img.src = "images/pil2.png";
}

Pil2.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 60, 60);
};

Pil2.prototype.move = function() {
  if (this.y > 700) {
    this.y = -580;
    this.x = Math.floor(Math.random() * 920);
  }

  this.y += this.vy;
};

// Pizza

function Pizza(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 920);
  this.y = -160;
  this.width;
  this.height;

  this.vy = 0.4;

  this.img = new Image();
  this.img.src = "images/pizza.png";
}

Pizza.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 70, 50);
};

Pizza.prototype.move = function() {
  if (this.y > 700) {
    this.y = -180;
    this.x = Math.floor(Math.random() * 920);
  }

  this.y += this.vy;
};



  // Objetos que caen, final.

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
