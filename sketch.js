//Escher cube pattern, every mouse click change color

//var radius = 20;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;

function setup() {
createCanvas(400,400);
angleMode(DEGREES);
frameRate(50);

}

//diamond tile function
function tile (x,y,radius){

  beginShape(); 
  vertex(x,y);
  vertex(x+radius*cos(30),y-radius*sin(30));
  vertex(x+2*radius*cos(30),y);
  vertex(x+radius*cos(30),y+radius*sin(30));
  endShape(CLOSE);
}

//mouse click change cloro function
function mouseClicked(){
  value1 = random()*255;
  value2 = random()*255;
  value3 = random()*255;
  value4 = random()*255;
  value5 = random()*255;
  value6 = random()*255;
}


function draw() {
  
var distance = dist(mouseY, mouseX, pmouseX, pmouseY);
    radius = map(distance, 0, 50, 10, 30);  
//lower right part of cube color  
background(255,value1,value2);

//tile for upper orrizontal part of cube  
  for(x=0; x < 400;x += 2*radius*cos(30)){
    for(y=0; y < 400; y += 2*radius + 2*radius*sin(30)){
      
    
    fill(value3,value4,255);
    tile(x,y,radius);
    }
  }
  
 for(x = -radius*cos(30); x < 400;x += 2*radius*cos(30)){
    for(y = radius+radius*sin(30); y < 400; y += 2*radius+2*radius*sin(30)){
      
    fill(value3,value4,255);
    tile(x,y,radius);
    }
  }

//tile for lower right part of cube 
 for(x=0; x < 400;x += 2*radius*cos(30)){
    for(y=0; y < 400; y += (2*radius*sin(30)+2*radius) ){
push();
  
  translate(x,y)
  rotate(60)
  translate(-x,-y);
 fill(value5,255,value6);
 tile(x,y,radius);
 
pop();
    }
  }

 for(x = -radius*cos(30); x < 400;x += 2*radius*cos(30)){
    for(y = radius+radius*sin(30); y < 400; y += (2*radius*sin(30)+2*radius) ){
push();
  
  translate(x,y)
  rotate(60)
  translate(-x,-y);
  
  fill(value5,255,value6);
 tile(x,y,radius);
 
 
pop();
    }
  }
}


