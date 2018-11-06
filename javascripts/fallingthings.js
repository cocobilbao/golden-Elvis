//Disco

function Record(game) {
  this.game = game
    this.canvas = this.game.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player = this.game.player
    this.x = Math.floor(Math.random() * 900);
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
      this.y = -80;
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

  
  Record.prototype.collision = function(){
   if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
       this.y = -80;
       this.x = (Math.floor(Math.random() * 900));  
  }      
}
  

//Tarta

  function Cake(game) {
    this.game = game;
    this.canvas = this.game.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player = this.game.player
    this.x = Math.floor(Math.random() * 900);
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

  Cake.prototype.collision = function(){
    if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
        
        this.y = -80;
        this.x = (Math.floor(Math.random() * 900));  
   }      
 }
 

// Pirula

  function Pill(game) {
    this.game = game;
    this.canvas = this.game.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player = this.game.player;
    this.x = Math.floor(Math.random() * 900
    );
    this.y = -160;
    this.width = 60;
    this.height = 60;

    this.vy = 0.45;

    this.img = new Image();
    this.img.src = "images/pill.png";
  }

  Pill.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  Pill.prototype.move = function() {
    if (this.y > 700) {
      this.y = -180;
      this.x = Math.floor(Math.random() * 900
      );
    }

    this.y += this.vy;
  };

  Pill.prototype.collision = function(){
    if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
        
        this.y = -160;
        this.x = (Math.floor(Math.random() * 900));  
   }      
 }

  // Hamburguesa

  function Burger(game) {
    this.game = game;
    this.canvas = this.game.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player = this.game.player;
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

  Burger.prototype.collision = function(){
    if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
        
        this.y = -180;
        this.x = (Math.floor(Math.random() * 900));  
   }      
 }

//Tarta

function Cake2(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
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

  Cake2.prototype.collision = function(){
    if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
        
        this.y = -180;
        this.x = (Math.floor(Math.random() * 900));  
   }      
 }

// Pirula

function Pill2(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
  this.x = Math.floor(Math.random() * 900);
  this.y = -160;
  this.width = 60;
  this.height = 60;

  this.vy = 0.5;

  this.img = new Image();
  this.img.src = "images/pill2.png";
}

Pill2.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Pill2.prototype.move = function() {
  if (this.y > 700) {
    this.y = -580;
    this.x = Math.floor(Math.random() * 900
    );
  }

  this.y += this.vy;
};

Pill2.prototype.collision = function(){
  if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
      
      this.y = -160;
      this.x = (Math.floor(Math.random() * 900));  
 }      
}



// Pizza

function Pizza(game) {
  this.game = game;
  this.canvas = this.game.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.player = this.game.player;
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

Pizza.prototype.collision = function(){
  if (this.player.x + this.player.width > this.x && this.x + this.width > this.player.x && this.y + this.height > this.player.y){
      
    this.player.img = this.player.img2;

      this.y = -160;
      this.x = (Math.floor(Math.random() * 900));  
 }      
}
