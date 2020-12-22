
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600 , 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800 , 600 , 1800 , 10 )
    paper = new Paper(200 , 550 , 20 , 20)
	Engine.run(engine);
    dustbin1 = new dustbin(1200 , 570)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  drawSprites();
  dustbin1.display()

 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}


