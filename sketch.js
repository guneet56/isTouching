var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 200, 70, 40);
  movingRect.shapeColor = "green";

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "green";

  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "green"; 
  
  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


if (isTouching(movingRect,obj1)) {
  obj1.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else {
  obj1.shapeColor = "green";
  movingRect.shapeColor = "green";
}

  drawSprites();
}

