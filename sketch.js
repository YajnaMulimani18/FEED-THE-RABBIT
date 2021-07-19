var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var red, redImg;
var orange, orangeImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redImg = loadImage("redImage.png");
  orangeImg = loadImage("orangeLeaf.png")
  leafImg = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var num = Math.round(random(1,4))
  if(frameCount%120===0){
    if(num===1){
      spawnApples();
    }
    else if(num===2){
      orangeleaf();
    }
    else if(num===3){
      redLeaf();
    }
    else{
     greenLeaf();
    }
  }
  
  drawSprites();
}

function spawnApples(){
  apple = createSprite(random(10,380));
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function orangeleaf(){
  orange = createSprite(random(10,380));
  orange.addImage(orangeImg);
  orange.scale = 0.07;
  orange.velocityY = 3;
  orange.lifetime = 150;
}
 
function redLeaf(){
  red = createSprite(random(10,380));
  red.addImage(redImg);
  red.scale = 0.07;
  red.velocityY = 3;
  red.lifetime = 150;

}

function greenLeaf(){
  leaf = createSprite(random(10,380));
  leaf.addImage(leafImg);
  leaf.scale = 0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}