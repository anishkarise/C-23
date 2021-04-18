const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ground=new Ground(200,390,400,10);
   

    

    box= new Box(180,100,50,50);
    box1=new Box(160,150,50,50)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.show();
    box.display();
    box1.display();
    
}