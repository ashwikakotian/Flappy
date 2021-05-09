 var bgI,fl,flI,flyI,flDI,pipeI,TopPipe,BottomPipe
var invG,pipeGroup
var gameState="PAUSE"
var score =0


function preload(){
  bgI=loadImage("images/bg.jpg")
  flI=loadImage("images/flappy.png")
  flyI=loadImage("images/fl.png")
  flDI=loadImage("images/flD.png")
  pipeI=loadImage("images/pipe.png")
 

}

function setup() {
  
  createCanvas(300,380);
  
  
  
  
  fl=createSprite(100, 200, 50, 50);
  fl.addImage(flI)
  fl.scale=0.1


  invG=createSprite(200, 412, 600,180); 
  invG.visible=false;



  

 pipeGroup=createGroup();

  //fl.setCollider("rectangle",0,0,80,100)
  
  
  
  
   
}

function draw() {
  background(bgI); 
  console.log(gameState)
  if (gameState==="PAUSE") {
    text("Press S Key to Start")
    if (keyWentDown("s")){
      gameState="PLAY"
    }
  }
   if (gameState==="PLAY") {
    spawnPipes()
     fill("white")
     textSize(40)
    text("Score:"+score,10,50)
    
  
  // fl.collide(invG);
  
  

  
  if(keyWentDown(32)){
    fl.velocityY=-13
    fl.addImage(flyI)
    
    
     }
    
     else{
       fl.addImage(flI)
       fl.scale=0.1   
       fl.velocityY = fl.velocityY +0.8
       
     }

     if(fl.isTouching(invG)){
      fl.addImage(flDI)
      gameState="END"
    }
    else{
      fl.addImage(flI)
    }
   
    if(fl.isTouching(pipeGroup)){
      gameState="END"
    }
  }
  if(gameState==="END"){
    pipeGroup.destroyEach()
      fl.velocityY=0
    
      fill("white")
      textSize(30)
      text("Game Over ",70,200)
    }
  

  drawSprites();
}
function spawnPipes(){
  if (frameCount % 60 === 0) {
    score+=10
 
  TopPipe = createSprite(600,30,25,random(100,200));
  TopPipe.shapeColor="green"
  // pipe.addImage(pipeI);
  TopPipe.velocityX = -3;
  pipeGroup.add(TopPipe);
  
  BottomPipe = createSprite(600,320,25,random(100,200));
  BottomPipe.shapeColor="green"
  
  // pipe.addImage(pipeI);
  BottomPipe.velocityX = -3;
  pipeGroup.add(BottomPipe);



  
  }
  
}
