var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100,150,50,50);
  wall=createSprite(1500,50,200,60);
  speed=random()
  weight=random()
  car.velocityX=wall.X;
}

function draw() {
  background(255,255,255);  
  CarDeformation();
  drawSprites();
}

function CarDeformation() {
  if(wall.x-car.x < car.width/2+wall.wodth/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation > 180) [
      car.shapeColor(255,0,0)
    ]
    if(deformation < 180 && deformation > 100) [
      car.shapeColor(230,230,0)
    ]
    if(deformation < 100) [
      car.shapeColor(0,255,0)
    ]
  }
}