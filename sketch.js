var jaxon, jaxon_running

var path, pathImg

var leftBoundary, rightBoundary

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200,400,400)
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2

  jaxon = createSprite (200,350,50,50)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale=0.1

  //create sprites here

  leftBoundary = createSprite(0,0,100,800)
  leftBoundary.visible=false;

  rightBoundary = createSprite(410,0,100,800)
  rightBoundary.visible=false;

}

function draw() {
  background(0);

  if(path.y>400){
    path.y = height/2
  }

  jaxon.x = World.mouseX
  edges = createEdgeSprites();
  jaxon.collide(edges[3]);
  jaxon.collide(leftBoundary);
  jaxon.collide(rightBoundary);
  
  drawSprites();

}
