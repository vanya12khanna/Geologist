
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Declaring a variable engine to hold the engine object
var rubber;
var stone;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	rubber = new Rubber(350,500);
	stone = new Stone(600,600);
	iron = new Iron(200,500);
	hammer = new Hammer(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");

  Engine.update(engine);
  
    ground.display();
	rubber.display();
	stone.display();
	iron.display();
	hammer.display();

}



