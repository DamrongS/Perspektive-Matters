let plr;
let mapp;

function setup() 
{
  createCanvas(800, 600);
  plr = new Player(width/2, height/1.5, "Normal")
  mapp = new Map(0, 0, "Normal")
}

function draw() 
{
  mapp.show();

  plr.show();
  plr.update();
}

function keyPressed()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.Left(0.1)
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.Right(0.1)
  }
}

function keyReleased()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.Left(0)
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.Right(0)
  }
}