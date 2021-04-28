var gamestate = "start"
var canvas;

function preload() {

  //Buttons
  helpButtonImg = loadImage("Images/Help_button_img.png");
  farmButtonImg = loadImage("Images/Farm_button_img.png");
  marketButtonImg = loadImage("Images/Market_button_img.png");
  warButtonImg = loadImage("Images/war_button.png");

  //Blobs
  yellowBlobImg = loadImage("Images/Yellow_blob_2.png");
  blueBlobImg = loadImage("Images/Blue_blob_2.png");
  orangeBlobImg = loadImage("Images/orange_blob_2.png");
  greenBlobImg = loadImage("Images/green_blob_2.png");

  //Knight
  knightFightImg = loadImage("Images/KnightFight.png");
  knightStandImg = loadImage("Images/knightStand.png");
  knightFinishImg = loadImage("Images/knightFinish.png");

}
function setup() {

  //Canvas
  canvas = createCanvas(1400,800);
  canvas.position(20,10);

  //Help button
  helpButton = createSprite(1000,200);
  helpButton.addImage(helpButtonImg);
  helpButton.scale = 0.2;

  //Farm button
  farmButton = createSprite(1000,300);
  farmButton.addImage(farmButtonImg);
  farmButton.scale = 0.2;

  //Market button
  marketButton = createSprite(1000,400);
  marketButton.addImage(marketButtonImg);
  marketButton.scale = 0.2;

  //War button
  warButton = createSprite(1000,500);
  warButton.addImage(warButtonImg);
  warButton.scale = 0.2

  //Yellow Blob
  yellowBlob = createSprite(500,200);
  yellowBlob.addImage(yellowBlobImg);
  yellowBlob.scale = 0.3;

  //Blue Blob
  blueBlob = createSprite(350,210);
  blueBlob.addImage(blueBlobImg);
  blueBlob.scale = 0.3;

  //Orange Blob
  orangeBlob = createSprite(200,190);
  orangeBlob.addImage(orangeBlobImg);
  orangeBlob.scale = 0.3;

  //Green Blob
  greenBlob = createSprite(100,220);
  greenBlob.addImage(greenBlobImg);
  greenBlob.scale = 0.3;

  //Knight fight
  knightFight = createSprite(150,500);
  knightFight.addImage(knightFightImg);
  knightFight.scale = 0.5;

  //Knight stand
  knightStand = createSprite(400,520);
  knightStand.addImage(knightStandImg);
  knightStand.scale = 0.5;

  //Knight finish
  knightFinish = createSprite(620,490);
  knightFinish.addImage(knightFinishImg);
  knightFinish.scale = 0.5;
}

function draw() {
  background("black"); 
  drawSprites();
};

function mousePressed()
{
  if (farmButton.mousePressed())
  {
    gamestate = "farm";
    console.log("farm gamestate");
  }
}