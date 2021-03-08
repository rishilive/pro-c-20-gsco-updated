var car,wall
var speed,weight



function setup() {
  createCanvas(1600,400);


  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
  
  car.velocityX=speed;
}

function draw() {
  background("black"); 
  if (wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * width * speed * speed/2;
    if(deformation>180){
    car.shapeColour = "red"; 
 }
if (deforamtion<180 && deforamtion>100) {
   car.shapeColour = "yellow";
}
if (deforamtion<100) {
car.shapeColour = "green";
}
 }

  drawSprites();
}