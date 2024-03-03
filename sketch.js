let Gravity = 0.98;

let plr;

let GroundLevel;

let playerSprites = [];

let revertedPlayerSprites = [];

let gameState = "Levels";
let menuState = "Start"
let plrState = "White";

let lop = 0;

let platformGround;

let platforms = [];

let reversePlatforms = [];

let currentLevel = 0;

let levels = [1];

let mapArray = []; //Index[0] is map, Index[1] is background, Index[2] is player, Index[3] is weapon, Index[4] is portal, Index[5] and onwards is platforms for now

let Portals = [];

function preload()
{
  grassImg = loadImage("assets/grass.png");

  platformImg = loadImage("assets/platform.png");

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

  swingEffect = loadImage("assets/swing_effect.png");
}

function setup() 
{
  angleMode(DEGREES);
  createCanvas(1200, 800);
  noSmooth();

  myMap = new Map(0)

  playButton = createButton("Play")
  playButton.style('font-family', 'YourCustomFont');
  playButton.position(width/2.5, height/3)
  playButton.size(150, 50)
  playButton.mousePressed(StartGame);

  settingsButton = createButton("Settings")
  settingsButton.style('font-family', 'YourCustomFont');
  settingsButton.position(width/2.5, height/2)
  settingsButton.size(150, 50)
  settingsButton.mousePressed(Settings);

  creditsButton = createButton("Credits")
  creditsButton.style('font-family', 'YourCustomFont');
  creditsButton.position(width/2.5, height/1.5)
  creditsButton.size(150, 50)
  creditsButton.mousePressed(Credits);

  playButton.show();
  settingsButton.show();
  creditsButton.show();

  paralax = new Paralax()
  GroundLevel = height/1.5;
  plr = new Player(width/2, height/1.5, "White");

  platforms.push(new Platform(100, 400, 300, 50));
  platforms.push(new Platform(600, 300, 300, 50));

  reversePlatforms.push(new Platform(700, 400, 300, 50))
  reversePlatforms.push(new Platform(800, 300, 300, 50));

  sword = new Weapon("marshmallow_sword.png", 0, 0, 3, 3, 180, plr)

  portal1 = new Portal(-200, GroundLevel - 150, 1)
  portal2 = new Portal(200, GroundLevel - 150, 1, 
  [["#","#","#","#",],
  ["#","p","p","#",],
  ["#","p","p","#",],
  ["#","p","p","#",],
  ["#","#","#","#",],]
  )
  portal3 = new Portal(400, GroundLevel - 150, 1, 
    [["#","#","#","#",],
    ["#","r","r","#",],
    ["#","r","r","#",],
    ["#","r","r","#",],
    ["#","#","#","#",],]
    )

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
      playButton.hide();
      settingsButton.hide();
      creditsButton.hide();
      if(myMap.state == 1)
      {
        myMap.level1();
      }

      sword.show(plr);
      sword.update(plr);

      portal1.show();
      portal2.show();
      portal3.show();

      plr.show();
      plr.update();
  }
 else if(gameState == "Levels")
  {
    myMap.levelSelector();
  }
  else
  {

  }

  console.log(portal1.playerCollision(plr));
}

function DisplayLevels()
{
  for(let i = 0; i < levels.length - 1; i++)
  {
    fill(255);
    rect(200, 200, 200, 400)
  }
}

function Menu()
{
  background(0)

  if(menuState == "Start")
  {
    playButton.show();
    settingsButton.show();
    creditsButton.show();
  }
  else if(menuState == "Levels")
  {
    playButton.hide();
    settingsButton.hide();
    creditsButton.hide();
    fill(255);
    DisplayLevels();
  }
  else if(menuState == "None")
  {
    playButton.hide();
    settingsButton.hide();
    creditsButton.hide();
  }
  else
  {
    playButton.hide();
    settingsButton.hide();
    creditsButton.hide();
  }
}

function StartGame()
{
  //menuState = "Levels";
  gameState = "Game";
  playButton.hide();
  settingsButton.hide();
  creditsButton.hide();
  mapArray.push(new Map(0), new Paralax(), new Player(width/2, height/1.5, "White"), new Weapon("marshmallow_sword.png", 0, 0, 3, 3, 180, plr), new Portal(-200, GroundLevel - 150, 1), new Platform(100, 400, 300, 50), new Platform(600, 300, 300, 50), new Platform(700, 400, 300, 50), new Platform(800, 300, 300, 50));
  //menuState = "None";
  myMap.changeState(1);
}

function Settings()
{
  menuState = "Settings";
}

function Credits()
{
  menuState = "Credits";
}

function Grounded() {
  platformGround = GroundLevel;

  for (let i = platforms.length - 1; i >= 0; i--) {
      const platform = platforms[i];
      platform.show();

      if (platform.playerCollision(plr)) {
          if (plr.pos.y < platform.pos.y && platform.pos.y < platformGround) {
              platformGround = platform.pos.y;
          }
      }
  }
}

function NewGrounded() {
  platformGround = GroundLevel;

  for (let i = mapArray.length - 1; i >= 5; i--) {
      const platform = mapArray[i];
      platform.show();

      if (platform.playerCollision(plr)) {
          if (plr.pos.y < platform.pos.y && platform.pos.y < platformGround) {
              platformGround = platform.pos.y;
          }
      }
  }
}

function levelSelector()
{

}

function reverseGrounded()
{
  platformGround = GroundLevel;

    for (let i = reversePlatforms.length - 1; i >= 0; i--) {
      const platform = reversePlatforms[i];
      platform.show();

      if (platform.playerCollision(plr)) {
          if (plr.pos.y < platform.pos.y && platform.pos.y < platformGround) {
              platformGround = platform.pos.y;
          }
      }
  }
}

function NewReverseGrounded() 
{
  platformGround = GroundLevel;

  for (let i = mapArray.length - 1; i >= 5; i--) {
      const platform = platforms[i];
      platform.show();

      if (platform.playerCollision(plr)) {
          if (plr.pos.y < platform.pos.y && platform.pos.y < platformGround) {
              platformGround = platform.pos.y;
          }
      }
  }
}

function PortalEntered(portalX)
{
  if(portal1.playerCollision(plr))
  {
    mapArray.splice(0, mapArray.length);
    mapArray.push(new Map(0), new Paralax(), new Player(width/2, height/1.5, "White"), new Weapon("marshmallow_sword.png", 0, 0, 3, 3, 180, plr), new Portal(portalX, GroundLevel - (5 * 32), 1), new Platform(100, 400, 300, 50), new Platform(600, 300, 300, 50), new Platform(700, 400, 300, 50), new Platform(800, 300, 300, 50));
  }
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
    platformImg.filter(INVERT);
    if(lop == 0)
    {
      lop = 1;
      sword.changeSprite("rmarshmallow_sword.png");  
    }
    else if(lop == 1)
    {
      lop = 0;
      sword.changeSprite("marshmallow_sword.png");
    }
  }
  if(key == "q")
  {
    sword.attack(plr);
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
