class Weapon
{
    constructor(sprite, x, y, xScale=1, yScale=1, angle=0)
    {
        this.sprite = "assets/"+sprite;
        this.pos = createVector(x, y)
        this.scale = createVector(xScale, yScale)
        this.angle = angle;
    }

    show()
    {
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.angle)
        scale(this.scale.x, this.scale.y)
        image(this.sprite, 0, 0, 64, 64)
        pop()
    }

    update()
    {
        
    }

}