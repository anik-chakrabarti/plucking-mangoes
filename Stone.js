class Stone{
    constructor(x,y,radius){
       
        this.body = Bodies.circle(x,y,radius);
        this.radius= radius ;
        this.image = loadImage("Sprites/stone.png");
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle ;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}