var fairy1;
var fairy2;

function preload(){
  f=loadAnimation("fairy1.png","fairy2.png");
  b=loadImage("Gunja.png");
  g=loadImage("g.jpg");
  sound=loadSound("Recording.m4a");
  back2=loadImage("birthday.png");
}
function setup(){
  createCanvas(500,480);
  fairy=createSprite(100,250,50,50);
  fairy.addAnimation("fairy",f);
  fairy.scale=0.20;
   
  gunja=createSprite(220,350,50,50);
  gunja.addImage("gunja",g);
  gunja.scale=0.1;
  
  i=createSprite(250,0,800,25);
  i.shapeColor = rgb(251,13,124);
  
  j=createSprite(0,250,25,800);
  j.shapeColor = rgb(251,13,124);
  
  k=createSprite(500,250,25,800);
  k.shapeColor = rgb(251,13,124);
  
  l=createSprite(250,480,800,25);
  l.shapeColor = rgb(251,13,124);
  
  m=createSprite(220,285,95,5);
  m.shapeColor = rgb(251,13,124);
  
  n=createSprite(220,415,100,5);
  n.shapeColor = rgb(251,13,124);
  
  o=createSprite(175,350,5,130);
  o.shapeColor = rgb(251,13,124);
  
  p=createSprite(268,350,5,130);
  p.shapeColor = rgb(251,13,124);
  
  back=createSprite(250,250,50,50);
  back.addImage("back",b);
  //back.scale=0.20;
  
  q=createSprite(20,0,50,50);
  q.velocityY=2;
  q.visible=false;
  
  birthday=createSprite(1260,250,20,20);
  birthday.velocityX=-2;
  birthday.addImage(back2);
  birthday.scale=0.80;
  
}
function draw(){
  background("yellow");
  
  if(q.y===50){
    sound.play();
  }
if(q.y===1000){
  sound.stop();
  birthday.velocityX=0;
}
  drawSprites();
}













