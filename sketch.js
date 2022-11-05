var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = .4
  invisibleBlockGroup = new Group()
  climbersGroup = new Group()
  doorsGroup = new Group()
}


function draw() {
  background(200);
  if (gameState === "play") {

  
  if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown(UP_ARROW)){
      ghost.velocityY = -10
    }

        ghost.velocityY = ghost.velocityY + .8

  if(keyDown(LEFT_ARROW)){
    ghost.velocityX = -5
  }
  
  if(keyDown(RIGHT_ARROW)){
    ghost.velocityX = 5
  }
spawndoors()

if (invisibleBlockGroup.isTouching(ghost)){
ghost.destroy()
  gameState = "end"
}


drawSprites()
  }
if (gameState === "end"){
  fill("blue")
  text("GAME OVER", 200, 200)

}
   
}


function spawndoors() {

if (frameCount % 250 === 0){
  var doors = createSprite(300, 150)
  doors.x = Math.round (random(100, 450))
  doors.addImage(doorImg)
  doors.velocityY = 1
  ghost.depth = doors.depth
  ghost.depth = ghost.depth + 1
  var climber = createSprite(300,200)
  climber.x = doors.x
  climber.addImage(climberImg)
climber.velocityY = doors.velocityY
var invisibleBlock = createSprite(300,215,climber.width,10)
invisibleBlock.x = doors.x
invisibleBlock.velocityY = 1
invisibleBlock.visible = true
invisibleBlock.debug = true
invisibleBlockGroup.add(invisibleBlock)
climbersGroup.add(climber)
doorsGroup.add(doors)

}

}