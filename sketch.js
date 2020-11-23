var fixed,moving;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(200, 200, 50, 50);
  fixed.shapeColor=("yellow");
  fixed.debug=true;
  fixed.velocityY=5;
moving=createSprite(200,400,50,50); 
moving.shapeColor=("yellow");
moving.debug=true;
moving.velocityY=-5;
}

function draw() {
  background("lightblue"); 
  console.log(moving.x-fixed.x);
  bounceOff(fixed,moving);
  drawSprites();
}