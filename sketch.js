var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,side1,side2,side3,s1,s2,s3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.75,isStatic:true})
	World.add(world, packageBody);
	
	side1=Bodies.rectangle(width/2,535,200,20,{isStatic:true})
	World.add(world,side1);
	s1=createSprite(side1.position.x,side1.position.y+15,200,20);

	side2=Bodies.rectangle(width/2-100,495,20,100,{isStatic:true})
	World.add(world,side2);
	s2=createSprite(side2.position.x,side2.position.y+15,20,100);

	side3=Bodies.rectangle(width/2+100,495,20,100,{isStatic:true})
	World.add(world,side3);
	s3=createSprite(side3.position.x,side3.position.y+15,20,100);

	s1.shapeColor=s2.shapeColor=s3.shapeColor=color("red");

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} )
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  textSize(15);
  text("Left,Up and Down keys",325,50);
	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y;
	if(keyDown(DOWN_ARROW)){
		kPress();
	}
	if (keyDown(LEFT_ARROW)) {
		kPress();
		(helicopterSprite.x<=110)? helicopterSprite.x=110:helicopterSprite.x-=10;
	  }
	  if (keyDown(RIGHT_ARROW)) {
		  kPress();
		(helicopterSprite.x>=canvas.width-110)? helicopterSprite.x=canvas.width-110:helicopterSprite.x+=10;
	  }
  drawSprites();

}

function kPress() {
	Matter.Body.setStatic(packageBody,false);
  }