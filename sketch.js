const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var button,buttonClickSound

function preload(){
buttonClickSound = loadSound("buttonClick.mp3")
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  button = createImg('clipart2002335.png');
  button.position(270,260);
  button.size(50,50);
  button.mouseClicked(buttonForce);


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
function buttonForce()
{
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05});
  buttonClickSound.play();
}