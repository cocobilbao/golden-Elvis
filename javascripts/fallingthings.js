//Disco

function Record(game) {
  this.game = game
    this.canvas = this.game.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player = this.game.player
    this.x = Math.floor(Math.random() * 900
    );
    this.y = -80;
    this.width = 80;
    this.height = 80;

    this.vy = 0.3;

    this.img = new Image();
    this.img.src = "images/disco.png";
  }

  Record.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  Record.prototype.move = function() {
    if (this.y > 700) {
      this.y = -40;
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  Record.prototype.collision = function(){
   //debugger
    if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
      
       this.y = -80;
       this.x = (Math.floor(Math.random() * 900));
      
  } 
       
}
  

//Tarta

  function Cake(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = Math.floor(Math.random() * 900
    );
    this.y = -80;
    this.width = 60;
    this.height = 60;

    this.vy = 0.55;

    this.img = new Image();
    this.img.src = "images/cheesecake.png";
  }

  Cake.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
    this.width = 60;
    this.height = 60;

    this.vy = 0.45;

    this.img = new Image();
    this.img.src = "images/pil.png";
  }

  Pil.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
    this.width = 70;
    this.height = 50;

    this.vy = 0.65;

    this.img = new Image();
    this.img.src = "images/burger.png";
  }

  Burger.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
  this.width = 60;
  this.height = 60;

  this.vy = 0.4;

  this.img = new Image();
  this.img.src = "images/cheesecake2.png";
}

Cake2.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
  this.width = 60;
  this.height = 60;

  this.vy = 0.5;

  this.img = new Image();
  this.img.src = "images/pil2.png";
}

Pil2.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
  this.width = 70;
  this.height = 50;

  this.vy = 0.35;

  this.img = new Image();
  this.img.src = "images/pizza.png";
};

Pizza.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Pizza.prototype.move = function() {
  if (this.y > 700) {
    this.y = -180;
    this.x = Math.floor(Math.random() * 900
    );
  }

  this.y += this.vy;
};


