 var BG

function preload(){
BG = loadImage("sea.png") 
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")



}

function setup(){
  createCanvas(400,400);
Sea = createSprite(400,200)
Sea.addImage(BG)
Sea.velocityX = -4
Sea.scale = 0.3;

Ship = createSprite(200,250,50,50)
Ship.addAnimation("movingShip",shipImage)
Ship.scale = 0.25;


}

function draw() {
  background("blue");
if(Sea.x < 0 ){
  Sea.x = Sea.width/8;
}

 drawSprites();

}





