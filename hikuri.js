let theta = 0;
let img;

function preload(){
  img = loadImage('https://res.cloudinary.com/www-edgarfabianfrias-org/image/upload/v1606749729/background-flower-png-download-650650-free-transparent-spirit-peyote-png-900_660_p5zotd.jpg');
}


function setup() {
  createCanvas(1000, 1000, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
 
  rotateX(theta);
  rotateY(theta/3);
  rotateZ(theta/5);
  
  texture(img);
  sphere(400);
  theta+= 0.01;
}