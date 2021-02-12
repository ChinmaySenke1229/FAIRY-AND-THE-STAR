var fairy,fairyImg;
var star,starImg;
var night,nightImg;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload()
{
  nightImg=loadImage("images/starnight.png");
  fairyImg=loadImage("images/fairy1.png");
  starImg=loadImage("images/star.png");
   //preload the images here
}

function setup() {
  
  createCanvas(800, 800);

  night=createSprite(400,400);
  night.addImage(nightImg);

  fairy=createSprite(100,500);
  fairy.addImage(fairyImg);
  fairy.scale=0.25;

  star=createSprite(650,30);
  star.addImage(starImg);
  star.scale=0.2;

  engine=Engine.create();
  world=engine.world

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true}); 
  World.add(world, starBody);
}


function draw() {
  background("black");
  Engine.update(engine)
  
  star.x=starBody.position.x
  star.y=starBody.position.y

  if(star.y>470&&starBody.position.y>470){
    Matter.Body.setStatic(starBody,true)
  }
  if(keyDown(LEFT_ARROW)){
    fairy.x=fairy.x-20;
  }
  if(keyDown(RIGHT_ARROW)){
    fairy.x=fairy.x+20;
  }
  if (keyDown(DOWN_ARROW))
   { Matter.Body.setStatic(starBody,false); }
  
  

drawSprites();
}
