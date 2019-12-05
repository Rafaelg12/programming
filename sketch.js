var grow=20;


function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(2,79,118); //an RGB color for the canvas' background
  fill(244, 122, 158);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(237, 34, 93);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
   ellipse(mouseX,mouseY,grow,grow);
   textSize(25);
   textFont("Georgia");
   textStyle(ITALIC);
   textAlign(CENTER);
   text("Move Mouse Around",250,100);
   


}
function mousePressed(){
  grow=grow+2

}