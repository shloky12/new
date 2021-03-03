var character,character1;
var bg,startimg,start,bg1,bg2;
var score=0;
var gameState;

function preload(){
character=loadImage("images/char.png")
bg=loadImage("images/bg1.jpg")
bg1=loadImage("images/bg2.webp")
startimg=loadImage("images/start.png")
//towerimg=loadImage("images/tower.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight);

    towerGroup= new Group()
    character1=createSprite(displayWidth/2,displayHeight/2+350,20,20);
    character1.addImage(character)
    character1.scale=0.5
    start=createSprite(displayWidth/2,displayHeight/2)
    start.addImage(startimg);
    start.scale=0.3

    
   
    //tower.addImage(towerimg);
   // tower.scale=0.2;
    
}
function draw(){
    background("black")
    textSize(20);
    fill("White")
    text("Score: "+ score,100,100);

    

       // character1.velocityX = -(6 + 3*score/100);
        
        
    if(mousePressedOver(start))
    {
     // text("GAme begain",100,100)
    start.visible=false;
    gameState='PLAY'
        
    }
    if (gameState==='PLAY'){
        score = score + Math.round(getFrameRate()/60);
    //if (bg2.y<0){
       // bg2.y=bg2.displayWidth/2;
    //}
    if (keyDown("space")){
        character1.velocityY=-2
    }
        character1.velocityY = character1.velocityY + 0.8
    
      if (keyDown("left_arrow")){
        character1.x=character1.x-3
    }
      if (keyDown("right_arrow")){
        character1.x=character1.x+3
    }
    bg4();
    towers();
    if (character1.y>=displayHeight-5){
        gameState='END'
        console.log("game over")
    }
}
if (gameState==='END'){
    fill("White")
    textSize(100)
    text("TRY AGAIN",displayWidth/2,displayHeight/2);
}
    drawSprites();
}
function towers (){
    if(frameCount % 220 === 0){
    tower=createSprite(random(displayWidth/2+100,displayWidth/2+400),-50,100,20)
    tower.shapeColor="255";
    tower.velocityY=+1;
    towerGroup.add(tower)
    }
    
}

function bg4 (){

    bg2=createSprite(displayWidth,displayHeight,displayWidth,displayHeight)
    bg2.addImage(bg)
    
    
    bg2.velocityY=-2;
    if (bg2.y<0){
        bg2.addImage(bg1)
    }

}
/*
function spawanDoors(){
    if (frameCount%250===0){
      var door=createSprite(random(100,400),-50)
      door.addImage(doorimg)
      door.velocityY=1;
      door.lifetime=600
      doorGroup.add(door)
      
      ghost.depth=door.depth+1
      var climber= createSprite(200,10);
      climber.addImage(climberimg)
      climber.velocityY=1;
      climber.x=door.x
      climberGroup.add(climber)
      
      var invisibleblock=createSprite(door.x,15,climber.width,2)
      invisibleblock.velocityY=1
      invisibleblock.visible=false
      invisibleGroup.add(invisibleblock)
      
      
    }
    */