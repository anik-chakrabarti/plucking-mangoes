
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body ;
const Constraint = Matter.Constraint ;

var boy,boy_img,tree,tree_img,stone,ground,sling ;
var mango1,mango2,mango3,mango4,mango5 ;

function preload()
{
	boy_img = loadImage("Sprites/boy.png");
	tree_img= loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(850,380);


	engine = Engine.create();
	world = engine.world;

	//Creating bodies
	ground = new Ground(425,370,850,40); 
	stone = new Stone(120,280,30);
	sling = new SlingShot(stone.body,{x:120 , y:280 });
	mango1 = new Mango(750,150,40);
	mango2 = new Mango(650,150,40);
	mango3 = new Mango(550,150,40);
	mango4 = new Mango(600,70,40);
	mango5 = new Mango(680,70,40);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  background(73,200,255);
  
  image(tree_img,500,20,300,350);
  image(boy_img,100,240,100,150);

  ground.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //calling the detect collision function 
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

  keyPressed();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectcollision(stone1,mango1){

	var mangoPos = mango1.body.position ;
	var stonePos = stone1.body.position ;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance <= mango1.radius + stone1.radius){
		Body.setStatic(mango1.body,false);

	}
}

function keyPressed(){
 
	if(keyDown("space")){
		Body.setPosition(stone.body,{x:235 , y: 420});
		sling.attach(stone.body);
	}
}



