var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  thickness=Math.round(random(22,83));
}

function draw() {
  background("black"); 
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,255,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(wall1,bullet1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}