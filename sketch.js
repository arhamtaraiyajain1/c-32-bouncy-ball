const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(100,500,2000,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball1 = Bodies.circle(200,100,50, ball_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(170,60,10, ball_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(210,45,35, ball_options);
    World.add(world,ball3);

    console.log(ground);
}

function draw(){
    
    background("red");
    Engine.update(engine);
    rectMode(CENTER);
    fill ("white")
    rect(ground.position.x,ground.position.y,2000,20);
 
    ellipseMode(RADIUS);
    fill ("black")
    ellipse(ball1.position.x, ball1.position.y, 20, 20);

    ellipseMode(RADIUS);
    fill ("yellow")
    ellipse(ball2.position.x, ball2.position.y, 20, 20);

    ellipseMode(RADIUS);
    fill ("blue")
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
}