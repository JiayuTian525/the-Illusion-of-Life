
let canvas;
let button;
let OfferIncense = false;
let buddhaWalls = [];


//variables to manage food state
let incense = 0;

//add variables to manage Tama state
let weak = 0;
let strong = 1;
let buddhaStatus = weak;


//Tama location & size
let buddhaX;
let buddhaY;
let buddhaDiam;

function setup() {
  //buddha wall
  for (let i=0; i<width; i++) {
      for(let j=0; j<height;j++){
        
    let w = new BuddhaWall(250*(i), 220*(j));
    
    buddhaWalls.push(w); // add to array
      }
  }

  //canvas = createCanvas(800, 450);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  buddhaX = width/2;
  buddhaY = height/2;
  buddhaDiam = width/16;

  addGUI();
}

function draw() {
  background(15,10);
  
  //Drawing
  noStroke();

  
  //buddha light
  
  push();

  fill(255,10);
  
  for(let o=0; o<width; o=o+100){
    for(let u=0; u<height; u=u+90){
      circle(52+o, 47+u, buddhaDiam);
    }
  }
  console.log(buddhaDiam);
  pop();
  
  if(buddhaDiam > 165){
       buddhaDiam = 50;
       }
  


  if(incense > 0 ){
    
    if(buddhaStatus == weak){
      takeIncense();
    }

  }else{
    OfferIncense = false;
    button.html("Offer Incense");
    button.removeClass("inactive");
  }

  
  push();
  
  scale((1/5)*2);
  
  LinearGradient(0, 0,//start point 300
                 width, height, //end point
                 color(216,7,191), //start color
                 color(0,0,251));//end color
  
  translate(130,70);
  for (let w of buddhaWalls) {
    w.display();
  }
  pop();

}

function windowResized() {//Responsive design
  resizeCanvas(windowWidth, windowHeight);
}

function takeIncense(){
  
  incense--;
  buddhaDiam++;
}

function addGUI()
{

  //add a button
  button = createButton("Offer Incense");
  button.parent("gui-container");
  
  button.addClass("button");
  
  button.mousePressed(handleButtonPressed);


}

function handleButtonPressed(){
  
  if(!OfferIncense){
    feeding = true;
    incense = random(10,12);
    console.log("Pressed");   
    
    button.html("Offering Incense");
    
    button.addClass("inactive");
     }

}function LinearGradient(sX,sY,eX,eY,colorS,colorE){
  
  let gradient = drawingContext.createLinearGradient(sX,sY,eX,eY);
  
  gradient.addColorStop(0,colorS);
  gradient.addColorStop(1,colorE);
  
  drawingContext.fillStyle = gradient;
}

class BuddhaWall{
  constructor(_x, _y) {
    this.location = new createVector(_x, _y);
  }
  display() {
    
    // Display buddha at location vector
    noStroke();

    //hair and face 
    ellipse(this.location.x, this.location.y+7, 32.1, 37.3);
    ellipse(this.location.x + 0.2, this.location.y - 11.4+7, 24.2, 17.5);
    ellipse(this.location.x + 0.1, this.location.y - 16.4+7, 16.7, 14.8);
    ellipse(this.location.x, this.location.y - 22.2+7, 10.3, 10.8);
    
    //shoulder
    triangle(this.location.x-15.3, this.location.y+28.5, this.location.x-6.2, this.location.y+28.7, this.location.x-5.9, this.location.y+19);
    triangle(this.location.x+6.2, this.location.y+19.3, this.location.x+6, this.location.y+29.1, this.location.x+15.1, this.location.y+29.4);
    
    //body
    rect(this.location.x - 35, this.location.y + 24, 71.5, 95, 40);
    
    //leg
    rect(this.location.x - 60.6, this.location.y + 84.1, 71.1, 35.2, 40);
    rect(this.location.x - 59.6, this.location.y + 88.5, 119.1, 30.5, 40);
  }
    
}


