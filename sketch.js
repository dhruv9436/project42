var craft, a1, a2;


function preload(){
  bg=loadImage("img/spacebg.jpg");
  a=loadImage("img/iss.png");
  sc1=loadImage("img/spacecraft1.png");
  sc2=loadImage("img/spacecraft2.png");
  sc3=loadImage("img/spacecraft3.png");
  sc4=loadImage("img/spacecraft4.png");
}
function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  a1=createSprite(640, 280, 50, 50);
  a1.addImage(a);
  a1.scale=1;

  craft=createSprite(640,530,50,50)
  craft.addImage(sc1);
  craft.scale=0.4
}

function draw() {
  background(bg);  
  drawSprites();

  if(craft.y<=(a1.y+70)&&craft.x<=(a1.x-5)){
    hasDocked = true;
    craft.addImage(sc1);
    textSize(25);
    fill("white");
    text("Docking Successful",450,500);
  }
  else{

    craft.x=craft.x+random(-10,10);
    textSize(25);
    fill("white");
    text("Dock the spacecraft here",450,500);
  }
  if (keyIsDown(UP_ARROW)) {
    craft.y = craft.y-10
    craft.addImage(sc2);
  }

if (keyIsDown(DOWN_ARROW)) {
  craft.y = craft.y+10
  craft.addImage(sc1);
}

if (keyIsDown(LEFT_ARROW)) {
  craft.x = craft.x-10
  craft.addImage(sc3);
}

if (keyIsDown(RIGHT_ARROW)) {
  craft.x = craft.x+10
  craft.addImage(sc4);
}
}
  drawSprites();






  