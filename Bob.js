class bOb {
    constructor(x,y) {
        var option = {
            'isStatic': false,
            'restitution': 1,
            'friction': 0,
            'density': 7.8  
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,25,option);
        World.add(world,this.body);
    }
    display() {
        push();
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("red");
        ellipse(pos.x,pos.y,25,25);
        pop();
    }
}