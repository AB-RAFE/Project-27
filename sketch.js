const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rop1,rop2,rop3,rop4,rop5;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new rOOf(width/2,100,width/2,20);

	bobObject1 = new bOb(200,300);
	bobObject2 = new bOb(250,300);
	bobObject3 = new bOb(300,300);
	bobObject4 = new bOb(350,300);
	bobObject5 = new bOb(400,300);

	rop1 = new rOpe(bobObject1.body,roof.body,-100,0);
	rop2 = new rOpe(bobObject2.body,roof.body,-50,0);
	rop3 = new rOpe(bobObject3.body,roof.body, 0,0);
	rop4 = new rOpe(bobObject4.body,roof.body, 50,0);
	rop5 = new rOpe(bobObject5.body,roof.body, 100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  display();

  fill("black");
  stroke("black");
  text("R A F E  K A  P E N D U L A M",230,105);
  text("press 'Space' for start the pendulam",205,500)

  drawSprites();
}

function display() {
	rop1.display();
	rop2.display();
	rop3.display();
	rop4.display();
	rop5.display();
  
	roof.display();
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
}

function keyPressed() {
	if(keyCode === 32) {
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:0})
    }
}

