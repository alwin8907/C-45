var bgimg
var treasurehunterimg
var treasurehunter
var enemyimg
var enemy1
function preload(){
 bgimg=loadImage("images/treasure background.jpg")
treasurehunterimg=loadAnimation("images/treasurehunter1.png","images/treasurehunter2.png","images/treasurehunter3.png")
enemyimg=loadImage("images/enemy.png")
}

function setup(){
    createCanvas(displayWidth-25,displayHeight-155)
  treasurehunter=createSprite(100,displayHeight-300)
  treasurehunter.addAnimation("running",treasurehunterimg)
  treasurehunter.scale=0.4
}


function draw(){
  background(bgimg)
enemy()


  drawSprites()
}

function enemy(){
if(World.frameCount%200===0){
enemy1=createSprite(displayWidth,displayHeight-300)
enemy1.addImage(enemyimg)
enemy1.scale=0.4
enemy1.velocityX=-4
}

}