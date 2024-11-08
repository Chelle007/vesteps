function preload(){
    // haze =loadImage("assets/haze.webp")
}

function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(200,200,200);
    gameChar = {
        x: width/2,
        y: height/5 * 4,
        color: 255
    }
}

function draw() {
    amongus(gameChar.x, gameChar.y);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}