function setup() {
    createCanvas(windowWidth, windowHeight); 
    // background(200,200,200);
    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }
    
    angleMode(DEGREES);
    // TODO: change this later according to

    keyIsFound = false;
}

function draw() {
    background(200,200,200);
    // Draw among us
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Draw guide lines (grid system)
    guideLines();
    
    // Draw collectable (key)
    drawKey(width/2, height/2, keyIsFound);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}