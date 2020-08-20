
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dus1, dus2, baseDus;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(400,380,800,20);

	dust1 = new Dustbin(750,350,20,50);
	dust2 = new Dustbin(650,350,20,50);
	baseDus = new Dustbin(700,350,100,20);

	paper = new Paper(50,350,14);


	Engine.run(engine);
  
}


function draw() {
  
  background(255,255,255);

  ground.display();

  dust1.display();
  dust2.display();
  baseDus.display();

  paper.display();
  



  drawSprites();


 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:32,y:-32})
	}

}


