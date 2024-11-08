function preload(){
    treasureOpenImg = loadImage("assets/treasure_open.png")
    treasureCloseImg = loadImage("assets/treasure_close.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight); 
    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }
    
    // TODO: change this later according to the state of the game functions
    keyIsFound = false;
}

function draw() {
    background(200,200,200);

    // Draw among us
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Draw guide lines (grid system)
    guideLines();
    
    // Draw collectable (key)
    drawKey(width / 6 * 5, height / 10 * 3, keyIsFound);

    // Draw treasure (just for preview only)
    drawTreasure(width / 6 * 5, height / 10 * 3, keyIsFound);

    // Draw treasure according to figma (outside canvas)
    drawTreasure(width / 6 * 7, height / 10 * 3, keyIsFound);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}