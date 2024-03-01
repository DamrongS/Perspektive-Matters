class Map
{
    constructor(state=0)
    {
        this.state = state;
    }

    settings()
    {

    }

    credits()
    {

    }

    levelSelector()
    {
        for(let i = 0; i < levels.length - 1; i++)
        {
            fill(255);
            text(i, i*15, 200)
        }
    }

    level1()
    {
        let grassWidth = 64*plr.scalar;
        let grassHeight = 64*plr.scalar;

        paralax.show(plr.pos.x);

        //fill(100*lop, 100*lop, 100*lop);
        fill(115, 181, 112);

        for (let x = -width; x <= (width*2) - grassWidth/2; x += grassWidth)
        {
            for (let y = GroundLevel; y < height*2; y += grassHeight) 
            {
            image(grassImg, x, y, grassWidth, grassHeight);
            }
        }

        if(lop == 0)
        {
            grounded();
        }
        else
        {
            reverseGrounded();
        }

        //rect(-width, GroundLevel , width*3, height);
        rectMode(CORNER);
    }

    update()
    {

    }

    getPosition()
    {
        return this.pos;
    }

    changeState(newState)
    {
        this.state = newState;
        return true;
    }

}