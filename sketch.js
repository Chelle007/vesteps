function preload(){
    haze =loadImage("assets/haze.webp")
}

function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(0);
}

function draw() {
    amongus(width/2, height/2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}