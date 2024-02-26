class Map
{
    constructor(x, y, state)
    {
        this.pos = createVector(x, y);
        this.state = state;
    }

    show()
    {
        //image
        if(this.state == "Normal")
        {
            background(0, 50, 180)
        }
        else if(this.state == "No")
        {

        }
    }

    update()
    {

    }

    getPosition()
    {
        return this.pos;
    }

}