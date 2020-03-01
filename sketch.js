const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var box1_options ={
    restitution: 0.8
}
var box2_options ={
    restitution: 0.8
}

var ball_options ={
    restitution: 1
}

var ball2_options ={
    restitution: 1
}

ball=Bodies.circle(100,100,30,ball_options);
World.add(world,ball);

ball2=Bodies.circle(200,50,20,ball2_options);
World.add(world,ball2);

box1=Bodies.rectangle(200,200,50,50,box1_options);
World.add(world,box1);

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

box2=Bodies.rectangle(200,200,50,50,box2_options);
World.add(world,box2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    fill("blue");

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
rect(box1.position.x,box1.position.y,50,50);
rect(box2.position.x,box2.position.y,50,50);

fill("red")

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30)
ellipse(ball2.position.x,ball2.position.y,20,20)
}