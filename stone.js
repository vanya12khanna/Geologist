class Stone{
    constructor(x,y){
        var options={
             'restitution': 0.8,
             'friction': 0.9,
             'density': 12
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options)
        World.add(world, this.body);
    }

    display(){  
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("black")
        rect(0, 0, 100, 100)
        pop();
    }

}