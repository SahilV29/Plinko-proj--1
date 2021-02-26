const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var division =[];

var divisionHeight=300;
var particles =[];
var plinkos =[];
var engine,world;

function setup() {
  engine=Engine.create()
  world=engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  
  for(var k=0;k<=width;k=k+80) {
    division.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=0;j<=width-10;j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for(var j=0;j<particles.length;j++) {
    particles[j].display();
  }
  for(var k=0;k<division.length;k++) {
    division[k].display();
  }  
  drawSprites();
}