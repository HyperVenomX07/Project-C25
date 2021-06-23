
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperB;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,680,width,20);
	dustbinObj=new dustbin(1200,650);
	paperB=new paperBall(300,50,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  if(keyDown("space")){
	  Matter.Body.applyForce(paperB.body,paperB.body.position,{x:10,y:-15});
  }

  groundObject.display();
  dustbinObj.display();
  paperB.display();

}

