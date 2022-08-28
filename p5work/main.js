var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 0.1;

function setup() {
  noStroke();
  createCanvas(400, 400);
}

function draw() {
   colorMode(RGB);
  background(0,5);
  if (mouseIsPressed === true) {
    noStroke();
    var x = mouseX + cos(angle) * scalar;
    var y = mouseY + sin(angle) * scalar;
  //  colorMode(RGB);
    fill(random(255, 0),100, 71);
    ellipse(x, y, 5, 5);
    let r1 = random(mouseX, 400);
    let r2 = random(mouseY, 400);
    // if(r1+x>400 || r1+y>400){
    //  ellipse(r1+x,r2+y, 5, 5);
    // }
    // else{
    //  ellipse(r1-x,r2-y, 5, 5);
    // }
    
    
    //ellipse(r1+x,r2+y, 5, 5);
    
    
    //  ellipse( map(r1+x, 0, width, 0 , 200),map(r2+y, 0, width, 0 , 200), 5, 5);
    // map(mouseX, 0, width, 25, 75);
     
    if(mouseX<200 && mouseY<200){
       ellipse(random(r1+x, 200),random(r2+y, 200), 3, 3);
    }
    else{
      ellipse(random(r1-x, 200),random(r2-y, 200), 3, 3);
    }
   
   
   
    angle += speed * 4;
    scalar += speed * 4;

  }
  else{
    
      angle = 2.0;
  scalar = 3.5;

  }
  
  
}


