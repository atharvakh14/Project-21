var bullet, wall, speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 15);
  bullet.shapeColor = "grey";
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, 800);
  wall.shapeColor = color(80, 80, 80);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet, wall)){
      damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      bullet.velocityX = 0;
      if(damage <= 10){
        wall.shapeColor = "green";
      }
      else if(damage > 10){
        wall.shapeColor = "red";
      }   
  }
}
function hasCollided(fbullet, fwall){
  if(fwall.width/2 + fbullet.width/2 >= fwall.x - fbullet.x) {
    return true;
  }
  else {
    return false;
  }
}