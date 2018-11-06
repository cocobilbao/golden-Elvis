//Disco

function Record(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 900
    );
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
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };
//Tarta

  function Cake(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 900
    );
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
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

// Pirula

  function Pil(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 900
    );
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
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

  // Hamburguesa

  function Burger(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 900
    );
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
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

//Tarta

function Cake2(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 900
  );
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
    this.x = Math.floor(Math.random() * 900
    );
  }

  this.y += this.vy;
};

// Pirula

function Pil2(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 900
  );
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
    this.x = Math.floor(Math.random() * 900
    );
  }

  this.y += this.vy;
};

// Pizza

function Pizza(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = Math.floor(Math.random() * 900
  );
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
    this.x = Math.floor(Math.random() * 900
    );
  }

  this.y += this.vy;
};


