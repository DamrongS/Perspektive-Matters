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
        push()
        translate(this.pos.x, this.pos.y)
        for(let r = 0; r < this.shape.length; r++)
        {
            for(let c = 0; c < this.shape[r].length; c++)
            {
                if(this.shape[r][c] == "#")
                {
                    if(lop == 1)
                    {
                        fill(255);
                        stroke(255);
                    }
                    else
                    {
                        fill(0);
                        stroke(0);
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "r")
                {
                    if(lop == 1)
                    {
                        fill(20, 168, 168);
                        stroke(20, 168, 168);
                    }
                    else
                    {
                        fill(235, 87, 87);
                        stroke(235, 87, 87);
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "g")
                {
                    if(lop == 1)
                    {
                        fill(156, 41, 143);
                        stroke(156, 41, 143)
                    }
                    else
                    {
                        fill(99, 214, 112);
                        stroke(99, 214, 112)
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "b")
                {
                    if(lop == 1)
                    {
                        fill(196, 180, 64);
                        stroke(196, 180, 64)
                    }
                    else
                    {
                        fill(59, 75, 191);
                        stroke(59, 75, 191)
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "y")
                {
                    if(lop == 1)
                    {
                        fill(5, 20, 118);
                        stroke(5, 20, 118);
                    }
                    else
                    {
                        fill(250, 235, 137);
                        stroke(250, 235, 137);
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "a")
                {
                    if(lop == 1)
                    {
                        fill(112, 9, 0);
                        stroke(112, 9, 0)
                    }
                    else
                    {
                        fill(143, 246, 255);
                        stroke(143, 246, 255)
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else if(this.shape[r][c] == "p")
                {
                    if(lop == 1)
                    {
                        fill(115, 182, 116);
                        stroke(115, 182, 116)
                    }
                    else
                    {
                        fill(140, 73, 139);
                        stroke(140, 73, 139)
                    }
                    rect(c*32, r*32, 32, 32);
                }
                else
                {
                    if(lop == 1)
                    {
                        fill(0);
                        stroke(0);
                    }
                    else
                    {
                        fill(255, 255, 255);
                        stroke(255);
                    }
                    rect(c*32, r*32, 32, 32);
                }
            }
        }
        pop();
    }

    update()
    {

    }

    playerCollision(foreigner)
    {
        if(foreigner.pos.y >= this.pos.y && foreigner.pos.y <= this.pos.y + (this.shape.length * 32) && foreigner.pos.x >= this.pos.x && foreigner.pos.x <= this.pos.x + (this.shape[0].length * 32))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}