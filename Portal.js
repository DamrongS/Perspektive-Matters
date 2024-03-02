class Portal
{
    constructor(x, y, destination, shape=
        [
            ["#","#","#","#",],
            ["#","r","g","#",],
            ["#","b","y","#",],
            ["#","a","p","#",],
            ["#","#","#","#",],
        ])
    {
        this.pos = createVector(x, y)
        this.destination = destination;
        this.shape = shape;
    }

    show()
    {
        for(let r = 0; r < this.shape.length; r++)
        {
            for(let c = 0; c < this.shape[r].length; c++)
            {
                if(this.shape[r][c] == "#")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(0);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "r")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(255, 0, 0);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "g")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(0, 255, 0);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "b")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(0, 0, 255);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "y")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(255, 255, 0);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "a")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(0, 255, 255);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else if(this.shape[r][c] == "p")
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(255, 0, 255);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
                else
                {
                    push();
                    translate(this.pos.x, this.pos.y)
                    fill(255, 255, 255);
                    rect(c*32, r*32, 32, 32);
                    pop();
                }
            }
        }
    }

    update()
    {

    }

}