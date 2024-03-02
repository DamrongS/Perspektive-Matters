class Weapon {
    constructor(sprite, x, y, xScale = 1, yScale = 1, angle = 90, player) {
        this.sprite = loadImage("assets/" + sprite);
        this.pos = createVector(x, y);
        this.scale = createVector(xScale, yScale);
        this.angle = angle;
        this.speed = 0.1;
        this.targetPos = createVector(x, y);
        this.delay = 0.2;
        this.offset = createVector(-20, 10);
        this.player = player;
    }

    show(plr) {
        push();
        translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);
        scale(this.scale.x * plr.direction, this.scale.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.sprite, 0, 0, 64, 64)
        pop();
    }

    update(plr) {
        this.targetPos = createVector(plr.pos.x, plr.pos.y);
        this.pos = p5.Vector.lerp(this.pos, this.targetPos, this.delay);
    }

    changeSprite(sprite)
    {
        this.sprite = loadImage("assets/"+sprite);
    }

}
