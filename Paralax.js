class Paralax
{
    constructor(backdrop="Forest")
    {
        this.backdrop = backdrop;
        this.speed = 10;
    }

    show(offset)
    {
        push();
        translate(0, 0)
        imageMode(CENTER)

        image(layer3Img, (this.speed * offset) / 78, height/10, width*1, height*1)

        image(layer2Img, (this.speed * offset) / 64, height/3, width*1, height*1)

        image(layer1Img, (this.speed * offset) / 256, 0, width*2, height*2)
        pop();
    }

}