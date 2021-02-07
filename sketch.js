var fixrect,moverect;


function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor="GREEN"
  fixrect.debug=true
  moverect=createSprite(700,100,40,40);
  moverect.shapeColor="GREEN"
  moverect.debug=true
}
function draw() {
  background(255,255,255);  
  moverect.x=mouseX;
  moverect.y=mouseY;
  console.log(moverect.x-fixrect.x);
  if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2&&fixrect.x-moverect.x<moverect.width/2+fixrect.width/2&&moverect.y-fixrect.y<fixrect.height/2+moverect.height/2&&fixrect.y-moverect.y<fixrect.height/2+moverect.height/2){
    moverect.shapeColor="RED"
    fixrect.shapeColor="RED"
  }
  else {
    moverect.shapeColor="GREEN"
    fixrect.shapeColor="GREEN"
  }
  
  drawSprites();
}