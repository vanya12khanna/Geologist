class Hammer{
    constructor(x,y){
        var options={
             'restitution': 0.8,
             'friction': 0.9,
             'density': 12
        }
        this.body = Bodies.rectangle(x, y, 200, 40, options)
        World.add(world, this.body);
    }

    display(){  
        var pos = this.body.position
        pos.x = mouseX
        pos.y = mouseY
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("orange")
        rect(0, 0, 200, 40)
        pop();
    }

}