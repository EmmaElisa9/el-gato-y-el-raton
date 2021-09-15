var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2, jerryImg3;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;
    tom.setCollider("rectangle",0,0,1300,800);

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
    jerry.setCollider("rectangle",0,0,800,1000);

}

function draw() {

    background(bg);

    if((tom.x - jerry.x < (tom.width - jerry.width)/2)){
      
      //cambiar animaciòn
      tom.addAnimation("gatoFeliz",tomImg3);
      tom.changeAnimation("gatoFeliz");
      tom.velocityX = 0;

      jerry.addAnimation("ratonFeliz",jerryImg3);
      jerry.changeAnimation("ratonFeliz");

    } 

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}