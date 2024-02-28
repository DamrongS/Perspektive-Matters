let Gravity = 0.98;

let plr;

let GroundLevel;

let playerSprites = [];

let revertedPlayerSprites = [];

let gameState = "Game";
let plrState = "White";

let lop = 0;

let platformGround;

function preload()
{

  grassImg = loadImage("assets/grass.png");

  layer1Img = loadImage("assets/layer1.png");
  layer2Img = loadImage("assets/layer2.png");
  layer3Img = loadImage("assets/layer3.png");

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
  angleMode(DEGREES);
  createCanvas(1200, 800);
  noSmooth();
  paralax = new Paralax()
  GroundLevel = height/1.5;
  plr = new Player(width/2, height/1.5, "White");
  platform = new Platform(100, 400, 100, 50);
}

function draw() 
{
  if(lop == 0)
  {
    background(82, 178, 222);
  }
  else
  {
    background(173, 77, 33);
  }
  

  let cameraX = plr.pos.x - width / 2;
  let cameraY = plr.pos.y - height / 2;

  translate(-cameraX, -cameraY);

  if(gameState == "Game")
  {
    game()
  }

  grounded();
}

function grounded()
{
  if (platform.playerCollision(plr))
  {
    platformGround = platform.pos.y;
  } else {
    platformGround = GroundLevel;
  }
}

function game()
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

  //rect(-width, GroundLevel , width*3, height);

  platform.show();
  plr.show();
  plr.update();
  rectMode(CORNER);
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
    grassImg.filter(INVERT)

    layer1Img.filter(INVERT)
    layer2Img.filter(INVERT)
    layer3Img.filter(INVERT)
    if(lop == 0)
    {
      lop = 1;
    }
    else if(lop == 1)
    {
      lop = 0;
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
