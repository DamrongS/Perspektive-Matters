class Player
{
    constructor(x, y, state="Normal")
    {
        this.pos = createVector(x, y);
        this.state = state
        this.vel = createVector(0, 0)
        this.speed = 5;
        this.acc = createVector(0, 0)
        this.direction = 1;
        this.left = false;
        this.right = false;
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(0)
        scale(1, 1)
        rectMode(CENTER);
        rect(0, 0, 50, 75)
        pop();
    }

    update()
    {
        this.vel.add(this.acc);

        this.vel.x = constrain(this.vel.x, -1, 1) * this.speed;

        this.pos.add(this.vel)
    }

    setState(newState)
    {
        this.state = newState;
    }

    Left(val)
    {
        if(val == 0)
        {
            this.vel.x = 0
            this.acc.x = 0
        }
        else
        {
            this.acc.x = -val
            this.direction = -1
        }
    }

    Right(val)
    {
        if(val == 0)
        {
            this.vel.x = 0
            this.acc.x = 0
        }
        else
        {
            this.acc.x = val
            this.direction = 1
        }
    }

    getPosition()
    {
        return this.pos;
    }

    setRight(val)
    {
        this.right = val;
    }

    setLeft(val)
    {
        this.left = val;
    }

    getRight()
    {
        return this.right;
    }

    getLeft()
    {
        return this.left;
    }

}