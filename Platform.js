class Platform
{
    constructor(x, y, thicc, tall)
    {
        this.pos = createVector(x, y);
        this.scalar = height/200;

        this.thicc = thicc;
        this.tall = tall;
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        console.log(this.pos.x + " " + this.pos.y)
        scale(this.direction * this.scalar, this.scalar);
        rect(0, 0, this.thicc, this.tall);
        //image()
        pop();
    }

    playerCollision(foreigner)
    {
        const onTop = foreigner.pos.y <= this.pos.y + 25;
        const insideX = foreigner.pos.x >= this.pos.x && foreigner.pos.x <= this.pos.x + this.thicc;

        if (onTop && insideX)
            return true
    }
}