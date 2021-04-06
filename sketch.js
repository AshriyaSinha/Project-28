const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;  

function preload()
{
	boy = loadImage ("Plucking mangoes/boy.png")
	treeBig = loadImage ("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boi = createSprite (150,630)
	boi.addImage (boy);
	boi.scale = 0.1
	bigtree = createSprite (560,500);
	bigtree.addImage (treeBig); 
	bigtree.scale = 0.4	

	m1 = new Mango (500,500,10);
	m1.scale = 5

	m2 = new Mango (425,400,10);
	m2.scale = 5

	m3 = new Mango (600,260,10);
	m3.scale = 5

	m4 = new Mango (500,300,10);
	m4.scale = 5

	m5 = new Mango (650,350,10);
	m5.scale = 5

	m6 = new Mango (750,425,10);
	m6.scale = 5

	m7 = new Mango (500,500,10);
	m7.scale = 5

	m8 = new Mango (560,400,10);
	m8.scale = 5

	ground = new Ground(400,700,800,25);
	ston = new Stone(100,300,30);
	s = new String (ston.Stone,{x:200,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display(); 
  ston.display()
  s.display ();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
 
}

function mouseDragged (){
	Matter.Body.setPosition (ston.Stone,{x:mouseX, y:mouseY})
}

function mouseReleased () {
	s.Detach ()
}

