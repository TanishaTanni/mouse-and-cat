// Creating Tom and Jerry
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImg;

function preload() {

 gardenImg   = loadImage("Images/garden.png");
 catImg1     = loadImage("Images/tomOne.png");
 catImg2     = loadImage("Images/tomTwo.png");
 catRunning  = loadImage("Images/tomThree.png");
 mouseImg1   = loadImage("Images/jerryOne.png");
 mouseImg2   = loadImage("Images/jerryTwo.png");
 mouseImg3   = loadImage("Images/jerryThree.png");
 mouseImg4   = loadImage("Images/jerryFour.png");

}

function setup(){

    createCanvas(2000,800);
    
    garden = createSprite(600,355,100,100);
    garden.addImage(gardenImg);
    garden.scale=1;

    cat = createSprite(950,590,50,50);
    cat.addImage(catImg1);
    cat.scale=0.2;

    mouse = createSprite(200,590,50,50);
    mouse.addImage(mouseImg1);
    mouse.scale=0.1;
}

function draw() {

    background(255);
  
    


    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
  }

  if(keyDown("leftArrow")){
    mouse.addAnimation(mouseImg2);
  }

}
