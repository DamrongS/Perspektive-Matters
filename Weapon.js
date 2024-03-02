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

        this.attackFrame = 0;
        this.isAttacking = false;
        this.attackDuration = 50;

        this.combo = 0;

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

        this.attackAnimation();
    }

    changeSprite(sprite)
    {
        this.sprite = loadImage("assets/"+sprite);
    }

    attackAnimation() {
        if (this.isAttacking) {
            //console.log(this.attackFrame);
            this.attackFrame++;
            this.angle += 5;
            if (this.attackFrame >= this.attackDuration) {
                this.attackFrame = 0;
                this.isAttacking = false;
                this.offset = createVector(-20, 10);
                this.angle = 180;
                if(this.lop == 1)
                {
                    this.changeSprite("marshmallow_sword.png");
                }
                else
                {
                    this.changeSprite("marshmallow_sword.png");
                }
            }

        }
    }

    attack(plr) {
        this.combo++;
        this.changeSprite("marshmallow_sword_swing1.gif");
        if(this.combo > 3)
        {
            this.combo = 1;
        }
        this.isAttacking = true;
        this.offset = createVector(100*plr.direction, 10);
        console.log(this.combo);
    }

}
