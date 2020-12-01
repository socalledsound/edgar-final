
let modelPath = "key.obj";
let key;

let rVal = 0;
let inc = 0.01;
let angle = 20;
let numKeys=20;
let closer = 10;
let closerInc=20;
let theta = 0;

function preload() {
     key = loadModel(modelPath);
    img = loadImage('https://res.cloudinary.com/www-edgarfabianfrias-org/image/upload/v1599528989/IMG_8353_bwewe2.jpg');

}

function setup() {
    
    createCanvas(500,500,WEBGL);
    // angleMode(DEGREES);
  stroke(190,80,190)
}

function draw() {
    background(10, 5, 220);
     
  push() 
  rotateX(PI);
    translate(0,-250,400);
    push()
    rotateY(theta);
texture(img);
  model(key);
    translate(0,-200,0);
    model(key);
    pop()
  
  
  
  pop();  
  
  theta+=0.05;
}
