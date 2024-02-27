let Gravity = 0.98;

let plr;

let GroundLevel;

let playerSprites = [];

let revertedPlayerSprites = [];

let gameState = "Game";
let plrState = "White";

function preload()
{
  playerSprites.push(loadImage("assets/marshmallow.png"));
  playerSprites.push(loadImage("assets/marshmallowWalk.gif"));
  playerSprites.push(loadImage("assets/marshmallowJump.png"));
  playerSprites.push(loadImage("assets/marshmallowFall.png"));

  revertedPlayerSprites.push(loadImage("assets/rmarshmallow.png"));
  revertedPlayerSprites.push(loadImage("assets/rmarshmallowWalk.gif"));
  revertedPlayerSprites.push(loadImage("assets/rmarshmallowJump.png"));
  revertedPlayerSprites.push(loadImage("assets/rmarshmallowFall.png"));
}

function setup() 
{
  createCanvas(1200, 800);
  noSmooth();
  GroundLevel = height/1.5;
  plr = new Player(width/2, height/1.5, "White");
}

function draw() 
{

  if(gameState == "Game")
  {
    if(plrState == "White")
    {
      gameWhite();
    }
    else if(plrState == "Black")
    {
      gameBlack();
    }
  }

}

function gameWhite()
{
  background(0);
  plr.show();
  plr.update();
}

function gameBlack()
{
  background(255);
  plr.show();
  plr.update();
}

function keyPressed()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.Left(1);
    if(!plr.isJumping)
      {
        plr.setState(1);
      }
    plr.holdingLeft = true;
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.Right(1);
    if(!plr.isJumping)
      {
        plr.setState(1);
      }
    plr.holdingRight = true;
  }
  else if (keyCode === 32 || keyCode == UP_ARROW) 
  {
    plr.onGround = false;
    plr.holdUp = true;
    plr.setState(2);
    plr.jump();
  }
  if(key == "f")
  {
    if(plrState == "White")
    {
      plrState = "Black"
    }
    else if(plrState == "Black")
    {
      plrState = "White"
    }
  }
}

function keyReleased()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.Left(0, false);
    plr.setState(0);
    plr.holdingLeft = false;
    if(plr.getBool()[1] == true)
    {
      plr.changedSprite = false
      plr.Right(1);
      if(!plr.isJumping)
      {
        plr.setState(1);
      }
      plr.holdingRight = true;
    }
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.changedSprite = false
    plr.Right(0, false);
    plr.holdingRight = false;
    plr.setState(0);
    if(plr.getBool()[0] == true)
    {
      plr.changedSprite = true
      plr.Left(1, true);
      if(!plr.isJumping)
      {
        plr.setState(1);
      }
      plr.holdingLeft = true;
    }
  }
  else if (keyCode === 32 || keyCode == UP_ARROW) 
  {
    plr.holdUp = false;
    plr.setState(3);
    plr.changedSprite = false
    //plr.onGround = true;
  }
}
