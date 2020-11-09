const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform,platformImg;
var block1,block2;
var boxImg,box,box2;

function preload() {
    backgroundImg = loadImage("2387.jpg");
    polygon_img = loadImage("0.png");
    boxImg = loadImage("jk.png");
}

function setup(){
    var canvas = createCanvas(1200,450);

    engine = Engine.create();
    world = engine.world;
    //block1 = new blocks(435,390,40,60);
    blocking1 = new blocks5(593,200,40,40);

    blockes1 = new blocks4(572,250,40,40);
    blockes2 = new blocks4(615,250,40,40);
    blockes3 = new blocks4(615,250,40,40);
    blockes4 = new blocks4(1000,180,40,40);

    blocked1 = new blocks3(553,299,40,40);
    blocked2 = new blocks3(593,299,40,40);
    blocked3 = new blocks3(970,250,40,40);
    blocked4 = new blocks3(1010,250,40,40);

    blockno1 = new blocks(510,350,40,40);
    blockno2 = new blocks(550,350,40,40);
    blockno3 = new blocks(590,350,40,40);
    blockno4 = new blocks(630,350,40,40);
    blockno5 = new blocks(670,350,40,40);
    blockno6 = new blocks(950,290,40,40);
    blockno7 = new blocks(980,290,40,40);
    blockno8 = new blocks(1010,290,40,40);
    blockno9 = new blocks(1040,290,40,40);

    block2 = new blocks2(490,399,40,40);
    block3 = new blocks2(525,399,40,40);
    block4 = new blocks2(560,399,40,40);
    block5 = new blocks2(595,399,40,40);
    block6 = new blocks2(635,399,40,40);
    block7 = new blocks2(665,399,40,40);
    block8 = new blocks2(699,399,40,40);
    block9 = new blocks2(930,304,40,40);
    block10 = new blocks2(960,304,40,40);
    block11 = new blocks2(990,304,40,40);
    block12 = new blocks2(1020,304,40,40);
    block13 = new blocks2(1050,304,40,40);
    block14 = new blocks2(1080,304,40,40);
    ground = new Ground(600,400,400,20);
    platform = new Ground(1000, 305, 300, 20);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});

    var options ={
        isStatic : true
    }
    box = Bodies.rectangle(1000,387,20,20,options);
    World.add(world,box);
    
    var options ={
        isStatic : true
    }
    box2 = Bodies.rectangle(600,482,20,20,options);
    World.add(world,box2);

}

function draw(){
    rectMode(CENTER);
    background(66,28,78);
    Engine.update(engine);
    ground.display();
    //block1.display();
    blocking1.display();

    blockes1.display();
    blockes2.display();
    blockes3.display();
    blockes4.display();

    blocked1.display();
    blocked2.display();
    blocked3.display();
    blocked4.display();

    blockno1.display();
    blockno2.display();
    blockno3.display();
    blockno4.display();
    blockno5.display();
    blockno6.display();
    blockno7.display();
    blockno8.display();
    blockno9.display();

    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    platform.display();

    imageMode(CENTER);
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

    imageMode(CENTER);
    image(boxImg,box.position.x,box.position.y);

    imageMode(CENTER);
    image(boxImg,box2.position.x,box2.position.y);
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }