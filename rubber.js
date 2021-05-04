class Rubber{
    constructor(x,y){
        var options={
             restitution: 0.3,
             friction: 5,
             density: 1
        }
        this.body = Bodies.circle(x, y, 30, options)
        World.add(world, this.body);
    }

    display(){  
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(0, 0, 30, 30)
        pop();
    }

}