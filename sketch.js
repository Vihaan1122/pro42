var docker=false;
var ISS,spacecraft,spaceBG,s1,s2,s3,s4,issImage;


function preload()
{
s1=loadImage("spacecraft1.png");
s2=loadImage("spacecraft2.png");
s3=loadImage("spacecraft3.png");
s4=loadImage("spacecraft4.png");
issImage=loadImage("iss.png")
spaceBG=loadImage("spacebg.jpg");
}
function setup() {
  createCanvas(600,600);
spacecraft=createSprite(285,400);
spacecraft.addImage(s1);
spacecraft.scale=0.1;
ISS=createSprite(300,300);
ISS.addImage(issImage);
 
}

function draw() {
  background(spaceBG); 
if(!docker){
  spacecraft.x=spacecraft.x+random(-1,1);

if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;
  spacecraft.addImage(s2);
}
if(keyDown("DOWN_ARROW")){
  spacecraft.y=spacecraft.y+2;
  
}


if(keyDown("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-1;
  spacecraft.addImage(s4);

}
if(keyDown("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+1;
  spacecraft.addImage(s3);

}
}
if(spacecraft.y<=(ISS.y+70)&&spacecraft.x<=(ISS.x-10)){
  docker=true;
  textSize(28);
  fill ("white");
  text("Docking Successful",300,500)
}

  drawSprites();
}