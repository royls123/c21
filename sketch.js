var fixedRect, movingRect;
var rect1,rect2,rect3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-2
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,200,80,30);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(200,200,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;


  rect3 = createSprite(600,200,80,30);
  rect3.shapeColor = "green";
  rect3.debug = true;
  rect3.velocityY=2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(fixedRect,rect3)
if (isTouching(movingRect,rect1)){


  
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  if (isTouching(movingRect,rect2)){


  
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if (isTouching(movingRect,rect3)){


  
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  





  drawSprites();
}

