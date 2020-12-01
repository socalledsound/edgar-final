let songWithJoshua
let amp;
let myLevels = [];
let started  = false;
let loaded = false;

function setLoaded(){
  loaded = true;
}

function preload(){
  console.log(loaded);
 
  songWithJoshua = loadSound('sounds/solstice.mp3', setLoaded);
}

function setup() {
  console.log(loaded);
  createCanvas(600, 600);
  stroke(0);
  amp = new p5.Amplitude();
}

function draw() {
  background(105,255,50);

  
  if(!started){
    drawStartScreen();
  } else {
    if(loaded){
      drawAmplitude();
    }
   
  }
}


function drawStartScreen(){
  fill(0);
  textSize(25);
  text('click here to hear our song', 9, 80);
}

function drawAmplitude(){

  let vol = amp.getLevel();
  if (vol > 0){
    
  myLevels.push(vol);
  }


    noFill();

    beginShape()
  
    myLevels.forEach((level, i) => {
      // remap the value
      let y = map(level, 0.001, 0.4, height, 0);
      console.log(y);
      vertex(i,y);
    })  

  
    endShape();
  
  
    if(myLevels.length > width - 150){
      myLevels.splice(0, 1);
    }
  
  
}

function changeStrokeColo(){
  stroke(random(255), random(255), random(255));
}


function mousePressed(){
started = true;
songWithJoshua.play();

}