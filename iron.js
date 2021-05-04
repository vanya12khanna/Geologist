class Iron{
    constructor(x,y){
        var options={
             'restitution': 0.8,
             'friction': 3,
             'density': 15
        }
        this.body = Bodies.rectangle(x, y, 70, 40, options)
        World.add(world, this.body);
    }

    display(){  
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("brown")
        rect(0, 0, 100, 100)
        pop();
    }

}