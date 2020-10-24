class Block4 {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(30,30,30);
      fill(128,128,128);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };