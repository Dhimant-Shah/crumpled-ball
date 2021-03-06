class Ball  {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
    
      }

      this.body = Bodies.circle(x, y, 20, options);
      this.radius= 90;
      this.image=loadImage("images for paper toss/paper_ball-removebg-preview-removebg-preview.png")
     
    
   
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
  
  };