
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperImg; 

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperImg=new paper(50,50,300,30);
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  if(keyDown(UP_ARROW)){
	  paperImg.y = paperImg.y - 5;
  }
  if(keyDown(DOWN_ARROW)){
	  paperImg.y = paperImg.y + 5;
  }
  if(keyDown(LEFT_ARROW)){
	  paperImg.x = paperImg.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
	  paperImg.x = paperImg.x + 5;
  }
  if(paperImg.isTouching(dustbinObj)){
	 text("Well done!", 800,350,100,40);
  }

  groundObject.display();
  dustbinObj.display();
  paperImg.display();

}