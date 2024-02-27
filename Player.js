class Player
{
    constructor(x, y, character="White")
    {
        this.character = character;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.direction = 1;
        this.angle = 0;
        this.holdingLeft = false;
        this.holdingRight = false;
        this.mass = 0;
        this.scalar = height/200;
        this.speed = this.scalar*1.5;
        this.characterState = 0;

        this.isJumping = false;
        this.jumpStrength = this.scalar * 5;
        this.jumpCount = 0;
        this.maxJumpCount = 2;

        this.changedSprite = false;

    }

    jump() 
    {
        if (!this.isJumping && this.jumpCount < this.maxJumpCount)
         {
            this.vel.y = -this.jumpStrength;
            this.isJumping = true;
            this.jumpCount++;
        }
    }

    applyGravity() 
    {
        if (this.pos.y < GroundLevel) {
            this.vel.y += Gravity;
            this.isJumping = true;
        } else {
            this.vel.y = 0;
            this.jumpCount = 0;
            if(this.isJumping)
            {
                this.characterState = 2;
            }
            else
            {
                if(this.holdingLeft || this.holdingRight)
                {
                    this.characterState = 1;
                }
                else
                {
                    this.characterState = 0;
                }
            }
            this.isJumping = false;
        }
    }

    characterHandler()
    {
        imageMode(CENTER);
        image(playerSprites[this.characterState], 0, 0)
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        scale(this.direction * this.scalar, this.scalar);
        rectMode(CENTER);
        this.characterHandler();
        pop();
    }

    update() 
    {
        this.pos.add(this.vel);
        this.pos.x = constrain(this.pos.x, playerSprites[this.characterState].width * 2, width - playerSprites[this.characterState].width * 2);
        this.applyGravity();
    }

    Left(val, truefalse=false)
    {
        this.vel.x = -val * this.speed;
        this.direction = -1;
    }

    Right(val, truefalse=false)
    {
        this.vel.x = val * this.speed;
        this.direction = 1;
    }

    getBool()
    {
        return [this.holdingLeft, this.holdingRight];
    }

    setState(newState=1)
    {
        this.characterState = newState;
    }

    collisionX(other)
    {
        return dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < this.playerSprites[this.characterState].width/2 + other.size.x;
    }

    collisionY(other)
    {
        return dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < this.playerSprites[this.characterState].height/2 + other.size.y;
    }

}

//place inside sketch.js
// function keyPressed()
// {
//     if(keyCode == LEFT_ARROW)
//     {
//       plr.Left(1);
//       plr.holdingLeft = true;
//     }
//     if(keyCode == RIGHT_ARROW)
//     {
//       plr.Right(1);
//       plr.holdingRight = true;
//     }
//   }
  
//   function keyReleased()
//   {
//     if(keyCode == LEFT_ARROW)
//     {
//       plr.Left(0, false);
//       plr.holdingLeft = false;
//       if(plr.getBool()[1] == true)
//       {
//         plr.Right(1)
//         plr.holdingRight = true;
//       }
//     }
//     if(keyCode == RIGHT_ARROW)
//     {
//       plr.Right(0, false);
//       plr.holdingRight = false;
//       if(plr.getBool()[0] == true)
//       {
//         plr.Left(1, true)
//         plr.holdingLeft = true;
//       }
//     }
//   }
