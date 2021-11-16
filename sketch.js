var title
var bgImg,titleImg,music;


function preload(){
  bgImg = loadImage("OIP(1).png");
  titleImg = loadImage("e3e0853cc46b3bfda8c5b37318f3b78d6280c7f984ab59283b84facef159bd84621d5fcb7aa90cabda39a3ee5e6b4b0d3255bfef95601890afd80709f2e9afc85c07cc1278cd1cc27395078e.png");
  music = loadSound("titerman.mp3")
}

function setup() {
  music.play()
  music.loop()
  createCanvas(windowWidth, windowHeight);
  title = createSprite(width/2,height/4)
  title.addImage(titleImg)
}
function draw() {
  background(bgImg)
  drawSprites()
}
