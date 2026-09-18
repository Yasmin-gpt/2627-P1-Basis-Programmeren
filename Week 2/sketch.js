let positieX = 0;
//let positieZ = 407;
let t = 0;

let startX = 327;
let startY = 333;
let endX = 580;
let endY = 346;

let carX = 0;

let timer = 0;

let cloud1 = 5
let cloud2 = 45
let cloud3 = 85
let cloud4 = 65
let cloud5 = 25
let cloud6 = 110
let cloud7 = 150
let cloud8 = 190
let cloud9 = 170
let cloud10 = 130
let tree1 = 400
let tikitiki = 0

let stoplichtstatus = "groen"


function setup() {
  createCanvas(600, 500);
}
function draw() {
  background(220);
  
  
  for (let y = 0; y < height; y++) {
    let c = lerpColor(
      color("#c8dcf3"),
      color("#5b9de9"),
      
      y/height
    );
    
    
    stroke(c);
    line(0,y,width,y);
  }
  stroke ("#db8a3a")
  fill ("#f2c342");
  strokeWeight(6)
  circle(positieX, 120, 90);
  positieX +=1

  if (positieX > 800) {
    positieX = -200;
  }

  fill ("yellow")
  circle (positieX, 120,50)
  positieX = positieX + 0.1
  
  if (positieX > 800) {
    positieX = 0;
  }
  //mountains
  stroke ("grey")
  strokeWeight (3)
  fill ("#5c5c5c")
  triangle (-40,400,240,400,110,300) //mini mountain lag = no fps = high hackers = banned
  fill ("#8b8989")
triangle (300,50,500,450,150,400) //big chud mountain
fill ("#757575")
triangle (460,460,670,400,600,230) //shy timmy

stroke ("#434343")
fill ("#5c5c5c")
stroke("#424141");
strokeWeight(3);

quad(
  398,300,
  410,300,
  430,339,
  400,339
);
quad(
  560,310,
  575,310,
  570,350,
  545,335
);
//stroke("#472b04");
//strokeWeight(4);
//line(407,333,560,343);

// train track
stroke("#472b04");
strokeWeight(4);
line(startX, startY, endX, endY);
//line(407,333,560,343);

t += 0.005;   

if (t > 1) {
  t = 0;
}


let trackX = startX + (endX - startX) * t;
let trackY = startY + (endY - startY) * t;

fill("yellow");
rect(trackX, trackY - 20, 60, 20);

  stroke ("#424141");
  strokeWeight(3);
  fill("#424141")


quad(
  560,310,
  575,310,
  570,350,
  564,330
);
quad(
  398,300,
  410,300,
  408,339,
  400,339
);


stroke ("#757575")
strokeWeight(3);
fill ("#757575")
square (574,310,37)

stroke ("#8b8989")
strokeWeight(3);
fill ("#8b8989")
square (320,300,80)

stroke("#472b04");
strokeWeight(4);
line(440,600,570,343);
line(640,600,545,345);
line(449,500,406,340);
line(370,500,425,340)

stroke("#107c1b")
fill ("green")
circle (0,400,50)
stroke("#107c1b")
fill ("green")
circle (50,410,50)
stroke ("#26942f")
strokeWeight ("2")
fill ("#358d35")
rect (0,400,600)
//road
stroke ("#464746")
strokeWeight ("2")
fill ("#4e4f4e")
rect (0,420,600)

push();
stroke("white");
strokeWeight(2);
fill("white");

for (let i = 0; i < 10; i++) {
  let offset = i * 100; 

  quad(
    20 + offset, 450,
    50 + offset, 450,
    46 + offset, 446,
    16 + offset, 446
  );
}

pop();

//clouds
fill ("white")
stroke("white")
circle(cloud1,75,60,)
cloud1 = cloud1 + 2
if (cloud1 > 800) {
  cloud1 = -100;
}

circle(cloud2,75,60,)
cloud2 = cloud2 + 2
if (cloud2 > 800) {
  cloud2 = -100;
}

circle(cloud3,75,60,)
cloud3 = cloud3 + 2
if (cloud3 > 800) {
  cloud3 = -100;
}

circle(cloud4,45,60,)
cloud4 = cloud4 + 2
if (cloud4 > 800) {
  cloud4 = -100;
}

circle(cloud5,40,60,)
cloud5 = cloud5 + 2
if (cloud5 > 800) {
  cloud5 = -100;
}

//cloud numero2
fill ("white")
stroke("white")
circle(cloud6,175,60,)
cloud6 = cloud6 + 1.6
if (cloud6 > 800) {
  cloud6 = -150;
}

circle(cloud7,175,60,)
cloud7 = cloud7 + 1.6
if (cloud7 > 800) {
  cloud7 = -150;
}

circle(cloud8,175,60,)
cloud8 = cloud8 + 1.6
if (cloud8 > 800) {
  cloud8 = -150;
}

circle(cloud9,150,60,)
cloud9 = cloud9 + 1.6
if (cloud9 > 800) {
  cloud9 = -150;
}

circle(cloud10,150,60,)
cloud10 = cloud10 + 1.6
if (cloud10 > 800) {
  cloud10 = -150;
}

stroke ("black")
fill("black");
// timer laten oplopen en terugzetten
fill ("#f59de6")
textSize(20)
text("timer:" + Math.floor(timer), 5,20)
timer = timer +1;
// stoplicht visueel
fill ("#313131")
stroke("#313131")
rect(110,320,10,90)
fill ("#636262")
rect (100,300,30,75)
// stoplicht grijze cirkels waar de lichten komen
fill ("#422c2c")
circle(115,313,20)
fill("#4e3e29")
circle(115,337,20)
fill("#2d3f27")
circle(115,362,20)
//  timer onder 300 groen licht aan
timer = timer + 0.01
if (timer < 300) {
  fill("#3a961c")
  circle(115,362,20)
  stoplichtstatus = "groen"
}
// timer boven 300 tussen 500 oranje licht aan
if (timer > 300 && timer < 500) {
  fill("#c06f06")
  circle(115,337,20)
  stoplichtstatus = "oranje"
}
// timer boven 500 rood licht aan.
if (timer > 500) {
  fill ("#b11111")
  circle(115,313,20)
  stoplichtstatus = "rood"
}
//na 800 terug op groen
if (timer > 800) {
  timer = 0
}
if (stoplichtstatus == "groen")
  { carX = carX + 1.8}
if (stoplichtstatus == "oranje")
    { carX = carX + 0.5}
if (stoplichtstatus == "rood")
  { carX = carX + 0}
//car numero 1


console.log(carX)
stroke ("black")
fill ("black")
circle(carX,420,35)
if (carX > 900) {
  carX = -200;
}

circle(carX + 60,420,35)

stroke ("red")
strokeWeight (2)
fill ("red")

rect(carX - 20, 400, 100, 20);
rect(carX - 20,380,70,40);

fill ("blue") 
rect (carX - 20,380,70,20);


//tree
fill ("brown")
  stroke("brown")
  rect (178,310,5,15)
rect (30,430,10,60)
fill ("#36952c")
stroke("#267b24")
circle(35,400,80,)
square (0,480,600,)
circle (180,300,20)
}
function keyPressed() {
  
  if (keyCode === 13) { 
    // wat gebeurd er als ik enter klik
      
      if( timer <300)
        timer = 300;
      else if (timer < 500)
        timer = 500
      else if(timer > 500)
        timer = 0
      
      
      
    }
  }
  
  
  //let kleuren = ["white", "#605555","#746a6a",
  //"#474a4d",
  //"#5B6065","#724747","#855555", 
  // "#dbb983", "#aab6c1"]; //array met kleuren voor het schip
  
  //strokeWeight(0)
  //let pixels = [
    
  //[-1,-1,-1,-1,-1,-1,-1,-1,3,3,3],
  //[-1,-1,-1,8,-1,7,-1,-1,-1,4,3],
  //[1,1,8,8,-1,0,-1,-1,4,3,-1],
  //[1,2,1,6,6,0,6,6,5,5,-1,],
  //[-1,2,2,2,1,6,6,5,5,-1,-1],
    //[-1,-1,-1,5,5,5,5,5,-1,-1],
  
  //];
  //if (kleurIndex !== -1) {
    //fill(kleuren[kleurIndex]);
    //rect(x, y, 10, 10);
//}
    


