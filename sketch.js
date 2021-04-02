
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var plane;
var hammar;
var stone;
var rubber;
var iron

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane=new Plane(600,700,1200,20);
hammar=new Hammar(10,100);
stone=new Stone(600,200,40,40);
rubber=new Rubber(1100,60,5);
iron=new Iron(600,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
Engine.update(engine);
  

plane.display();
hammar.display();
stone.display();
rubber.display();
iron.display();


  drawSprites();
 
}



