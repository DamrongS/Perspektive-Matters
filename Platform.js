class Platform
{
    constructor(x, y)
    {
        this.pos = createVector(x, y);
        this.scalar = height/200;
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        scale(this.direction * this.scalar, this.scalar);
        rectMode(CENTER);
        image()
        pop();
    }
}