var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,
  survivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -3;
  ground.x = ground.width / 2;


}


function draw() {
  background("skyblue");

  if (ground.x < 1000) {
    ground.x = ground.width / 2;
  }

  if (frameCount % 80 === 0) {
    banana();
  }
  if (frameCount % 300 == 0) {
    var obstacle = createSprite(350, 318, 70, 70);
    obstacle.velocityX = -2;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 190;
    obstacle.depth = monkey.depth - 1;
  }



  if (keyDown("space")) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  monkey.depth = banana.depth + 1;
  var survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  stroke("black");
  textSize(20);


  drawSprites();
}



function banana() {
  var banana = createSprite(250, Math.round(random(120, 200)), 2, 10);
  banana.velocityX = -3;
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 50;
}